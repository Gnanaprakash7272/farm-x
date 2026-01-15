import { useEffect, useState } from 'react'

export default function Home() {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch('/api/farm')
      .then(r => r.json())
      .then(setData)
  }, [])
  return (
    <main style={{padding: 20}}>
      <h1>farm-x</h1>
      <p>Full farming assistant</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  )
}
