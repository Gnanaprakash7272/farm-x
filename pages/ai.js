import { useState } from 'react'

export default function AIPage(){
  const [query, setQuery] = useState('')
  const [resp, setResp] = useState(null)
  const [loading, setLoading] = useState(false)

  async function ask(){
    setLoading(true)
    const r = await fetch('/api/ai/ask', { method: 'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ query }) })
    const j = await r.json()
    setResp(j)
    setLoading(false)
  }

  return (
    <main style={{padding:20}}>
      <h1>Ask Anything (AI)</h1>
      <textarea value={query} onChange={e=>setQuery(e.target.value)} rows={4} cols={60} />
      <div>
        <button onClick={ask} disabled={loading || !query}>{loading ? 'Waiting…' : 'Ask'}</button>
      </div>
      {resp && <pre style={{marginTop:20}}>{JSON.stringify(resp, null, 2)}</pre>}
    </main>
  )
}
