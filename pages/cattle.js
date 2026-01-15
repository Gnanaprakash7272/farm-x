import { useState } from 'react'

export default function Cattle(){
  const [recording, setRecording] = useState(false)
  const [result, setResult] = useState(null)

  async function startRecording(){
    setRecording(true)
    // Placeholder: implement real audio capture and upload
    setTimeout(()=>{ setRecording(false); setResult({ text: 'Placeholder cattle expert response' }) }, 1500)
  }

  return (
    <main style={{padding:20}}>
      <h1>Cattle Expert Voice System</h1>
      <p>Record audio of your cattle issue and get expert advice (placeholder).</p>
      <button onClick={startRecording} disabled={recording}>{recording ? 'Recording…' : 'Start Recording'}</button>
      {result && <pre style={{marginTop:20}}>{JSON.stringify(result,null,2)}</pre>}
    </main>
  )
}
