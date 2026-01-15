import { askAI } from '../../../src/server/ai'

export default async function handler(req, res){
  if(req.method !== 'POST') return res.status(405).end()
  const { query } = req.body
  try{
    const reply = await askAI(query)
    return res.json({ success: true, reply })
  }catch(e){
    return res.status(500).json({ success: false, error: String(e) })
  }
}
