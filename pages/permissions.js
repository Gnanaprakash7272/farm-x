import { useState } from 'react'

export default function Permissions(){
  const [status, setStatus] = useState({ gps: null, mic: null, cam: null })
  const [msg, setMsg] = useState('')
  const userId = 1 // placeholder: replace with real user id from auth

  async function requestPermissions(){
    // GPS
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(()=> setStatus(s=>({ ...s, gps: true })), ()=> setStatus(s=>({ ...s, gps: false })))
    }else setStatus(s=>({ ...s, gps: false }))

    // Microphone
    try{
      await navigator.mediaDevices.getUserMedia({ audio: true })
      setStatus(s=>({ ...s, mic: true }))
    }catch(e){ setStatus(s=>({ ...s, mic: false })) }

    // Camera
    try{
      await navigator.mediaDevices.getUserMedia({ video: true })
      setStatus(s=>({ ...s, cam: true }))
    }catch(e){ setStatus(s=>({ ...s, cam: false })) }

    // Save to server
    const res = await fetch('/api/permissions', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ userId, permissions: status }) })
    const j = await res.json()
    if(j.success) setMsg('Permissions saved')
  }

  return (
    <main style={{padding:20}}>
      <h1>Permissions</h1>
      <p>GPS: {String(status.gps)}</p>
      <p>Microphone: {String(status.mic)}</p>
      <p>Camera: {String(status.cam)}</p>
      <button onClick={requestPermissions}>Request & Save</button>
      <p>{msg}</p>
    </main>
  )
}
