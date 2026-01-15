import { getFarms } from '../../src/server/api/farm'

export default async function handler(req, res) {
  try {
    const farms = await getFarms()
    res.status(200).json(farms)
  } catch (e) {
    res.status(500).json({ error: String(e) })
  }
}
