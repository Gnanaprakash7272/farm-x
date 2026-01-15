// Placeholder AI connector. Integrate OpenAI/Apertus when API keys are available.
export async function askAI(prompt){
  if(!process.env.OPENAI_API_KEY) return { text: 'OPENAI_API_KEY not configured. This is a placeholder response.' }
  // In production: call OpenAI / Apertus API here.
  return { text: `Placeholder AI response for: ${prompt}` }
}
