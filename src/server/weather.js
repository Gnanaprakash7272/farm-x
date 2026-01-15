export async function fetchWeather(location){
  const key = process.env.WEATHER_API_KEY
  if(!key) throw new Error('WEATHER_API_KEY not configured')
  const q = encodeURIComponent(location||'New Delhi,IN')
  const r = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${key}&units=metric`)
  return await r.json()
}
