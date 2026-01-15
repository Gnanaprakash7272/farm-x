import { useState } from 'react'

export default function Login() {
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState('')
  const [phase, setPhase] = useState('send')
  const [message, setMessage] = useState('')

  async function send() {
    const res = await fetch('/api/auth/otp', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ action: 'send', phone }) })
    const j = await res.json()
    if (j.success) setPhase('verify')
  }
  async function verify() {
    const lang = navigator.language || 'en'
    const res = await fetch('/api/auth/otp', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ action: 'verify', phone, otp, language: lang }) })
    const j = await res.json()
    if (j.success) setMessage('Logged in')
    else setMessage('Failed')
  }

  return (
    <main style={{padding:20}}>
      <h1>Login / Sign up</h1>
      {phase === 'send' ? (
        <div>
          <input value={phone} onChange={e=>setPhone(e.target.value)} placeholder="Phone" />
          <button onClick={send}>Send OTP</button>
        </div>
      ) : (
        <div>
          <input value={otp} onChange={e=>setOtp(e.target.value)} placeholder="OTP" />
          <button onClick={verify}>Verify</button>
        </div>
      )}
      <p>{message}</p>
    </main>
  )
}
