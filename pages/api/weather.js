export default async function handler(req, res){
  const { location } = req.query
  const key = process.env.WEATHER_API_KEY
  if(!key) return res.status(400).json({ error: 'WEATHER_API_KEY not configured' })
  try{
    // Basic OpenWeatherMap example (user should provide key and optionally adjust endpoint)
    const q = encodeURIComponent(location || 'New Delhi,IN')
    const r = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${key}&units=metric`)
    const j = await r.json()
    return res.json({ success: true, data: j })
  }catch(e){
    return res.status(500).json({ success: false, error: String(e) })
  }
}
