import { prisma } from './db'

const otps = new Map()
export function sendOtp(phone){
  const code = '123456' // placeholder: integrate SMS provider in later steps
  otps.set(phone, code)
  return true
}
export function verifyOtp(phone, otp){
  return otps.get(phone) === String(otp)
}
export async function ensureUser(phone){
  if(!phone) return null
  let u = await prisma.user.findUnique({ where: { phone } })
  if(!u) u = await prisma.user.create({ data: { phone } })
  return u
}
