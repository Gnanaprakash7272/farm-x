import { sendOtp, verifyOtp, ensureUser } from '../../../src/server/auth'
import { prisma } from '../../../src/server/db'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  const { action, phone, otp, language } = req.body
  if (action === 'send') {
    sendOtp(phone)
    return res.json({ success: true })
  }
  if (action === 'verify') {
    const ok = verifyOtp(phone, otp)
    if (!ok) return res.status(400).json({ success: false, error: 'invalid_otp' })
    const user = await ensureUser(phone)
    if (language) {
      await prisma.user.update({ where: { id: user.id }, data: { language } })
    }
    return res.json({ success: true, user })
  }
  return res.status(400).json({ success: false })
}
