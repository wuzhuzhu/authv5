import { headers } from "next/headers";

const generationPayloadExample = {
	inputs: {
		max_tokens: 512,
		model: "meta-llama/Llama-2-70b-chat-hf",
		stream: true,
		temperature: 0.75,
		top_p: 0.8,
		messages: [
			{
				content: "Help me write a love poem",
				role: "user",
			},
		],
	},
	model: "llama2-70b",
	hardware: "A800",
};

// generate GenerationPayload type definition
export type GenerationPayload = typeof generationPayloadExample;

export async function POST(payload: GenerationPayload) {
	const res = await fetch(
		"https://cloud.siliconflow.com/api/v1/generation/create",
		{
			method: "POST",
			headers: {
				...headers(),
				"Content-Type": "application/json",
			},
			body: JSON.stringify(payload),
		},
	);

	const data = await res.json();

	return Response.json(data);
}