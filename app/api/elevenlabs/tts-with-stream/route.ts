import { createAudioStreamFromText } from "./createAudioStreamFromText";

const headers = new Headers({
  "Content-Type": "audio/mp3",
  "Transfer-Encoding": "chunked",
});

export async function POST(request: Request) {
  const { text } = await request.json();

  if (!text) {
    return new Response("Missing text parameter", { status: 400 });
  }

  const audioStream = await createAudioStreamFromText(text);
  return new Response(audioStream, { headers });
}
