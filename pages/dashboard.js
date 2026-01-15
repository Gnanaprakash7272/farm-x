import Link from 'next/link'

export default function Dashboard(){
  return (
    <main style={{padding:20}}>
      <h1>farm-x Dashboard</h1>
      <ul>
        <li><Link href="/permissions">Permissions</Link></li>
        <li><Link href="/login">Login</Link></li>
        <li><Link href="/disease">Crop Disease Detection (coming)</Link></li>
        <li><Link href="/cattle">Cattle Expert (coming)</Link></li>
        <li><Link href="/market">Market Prices (coming)</Link></li>
      </ul>
    </main>
  )
}
