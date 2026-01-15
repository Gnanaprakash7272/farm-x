import { useState } from 'react'

export default function WeatherPage(){
  const [loc, setLoc] = useState('')
  const [data, setData] = useState(null)
  async function getWeather(){
    const r = await fetch('/api/weather?location='+encodeURIComponent(loc||'') )
    const j = await r.json()
    setData(j)
  }
  return (
    <main style={{padding:20}}>
      <h1>Weather Prediction</h1>
      <input value={loc} onChange={e=>setLoc(e.target.value)} placeholder="City or lat,lon" />
      <button onClick={getWeather}>Get Weather</button>
      {data && <pre style={{marginTop:20}}>{JSON.stringify(data, null, 2)}</pre>}
    </main>
  )
}
