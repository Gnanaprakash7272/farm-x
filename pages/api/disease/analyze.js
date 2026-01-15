import { analyzeImage } from '../../../src/server/imageAnalysis'

export default async function handler(req, res){
  if(req.method !== 'POST') return res.status(405).end()
  const { image } = req.body
  if(!image) return res.status(400).json({ error: 'missing_image' })
  try{
    const analysis = await analyzeImage(image)
    return res.json({ success: true, analysis })
  }catch(e){
    return res.status(500).json({ success: false, error: String(e) })
  }
}
