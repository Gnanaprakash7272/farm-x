import { supabase } from '../../lib/db'
export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { data, error } = await supabase.from('items').select('*')
    if (error) return res.status(500).json({ error: error.message })
    return res.json(data)
  }
  if (req.method === 'POST') {
    const { data, error } = await supabase.from('items').insert([req.body])
    if (error) return res.status(500).json({ error: error.message })
    return res.status(201).json(data)
  }
  res.status(405).end()
}
