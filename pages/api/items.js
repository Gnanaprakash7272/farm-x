export default function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json([])
  }
  if (req.method === 'POST') {
    // Echo back the posted item (placeholder until Supabase is wired)
    return res.status(201).json(req.body)
  }
  res.status(405).end()
}
