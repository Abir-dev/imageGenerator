const HUGGING_FACE_API_URL =
"https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev";

export async function generateImage(prompt: string): Promise<Blob> {
  if (!isApiKeyConfigured()) {
    throw new Error("Hugging Face API key is not configured");
  }

  try {
    const response = await fetch(HUGGING_FACE_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_HUGGING_FACE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: prompt,
        parameters: {
          num_inference_steps: 25,
          guidance_scale: 7.5,
          width: 512,
          height: 512,
        },
        wait_for_model: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API request failed (${response.status}): ${errorText}`);
    }

    return await response.blob();
  } catch (error) {
    console.error("Error generating image:", error);
    if (error instanceof Error) {
      throw new Error(`Failed to generate image: ${error.message}`);
    }
    throw new Error("Failed to generate image. Please try again.");
  }
}

// Helper function to check if API key is configured
export function isApiKeyConfigured(): boolean {
  return !!import.meta.env.VITE_HUGGING_FACE_API_KEY;
}
