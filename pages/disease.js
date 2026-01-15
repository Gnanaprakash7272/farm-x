import { useState } from 'react'

export default function Disease() {
  const [file, setFile] = useState(null)
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  function onFile(e){
    const f = e.target.files[0]
    if(!f) return
    const reader = new FileReader()
    reader.onload = () => setFile(reader.result)
    reader.readAsDataURL(f)
  }

  async function analyze(){
    if(!file) return
    setLoading(true)
    const res = await fetch('/api/disease/analyze', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ image: file }) })
    const j = await res.json()
    setResult(j)
    setLoading(false)
  }

  return (
    <main style={{padding:20}}>
      <h1>Crop & Vegetable Disease Detection</h1>
      <input type="file" accept="image/*" capture="environment" onChange={onFile} />
      <div style={{marginTop:10}}>
        <button onClick={analyze} disabled={loading || !file}>{loading ? 'Analyzing...' : 'Analyze Image'}</button>
      </div>
      {result && (
        <div style={{marginTop:20}}>
          <h2>Result</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </main>
  )
}
