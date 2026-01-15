// Placeholder image analysis connector. Integrate real model (Apertus/OpenAI/vision) later.
export async function analyzeImage(dataUrl){
  // Basic heuristic placeholder: return a dummy disease detection
  // dataUrl is a base64 data URL; in production upload to storage or send to vision API
  await new Promise(r=>setTimeout(r,500))
  return {
    detected: true,
    disease: 'Leaf Blight (placeholder)',
    confidence: 0.86,
    suggestions: [
      'Isolate affected plants',
      'Apply recommended fungicide',
      'Improve drainage and airflow'
    ]
  }
}
