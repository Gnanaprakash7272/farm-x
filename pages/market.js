import { useState } from 'react'

export default function Market(){
  const [query, setQuery] = useState('')
  const [data, setData] = useState(null)
  async function getPrices(){
    const r = await fetch('/api/market?query='+encodeURIComponent(query))
    const j = await r.json()
    setData(j)
  }
  return (
    <main style={{padding:20}}>
      <h1>Live Market Prices</h1>
      <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="e.g., rice" />
      <button onClick={getPrices}>Get Prices</button>
      {data && <pre style={{marginTop:20}}>{JSON.stringify(data,null,2)}</pre>}
    </main>
  )
}
