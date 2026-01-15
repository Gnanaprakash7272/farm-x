import { prisma } from './db'

export async function savePermissions(userId, permissions){
  if(!userId) return null
  return await prisma.user.update({ where: { id: Number(userId) }, data: { permissions } })
}

export async function getPermissions(userId){
  if(!userId) return null
  const u = await prisma.user.findUnique({ where: { id: Number(userId) } })
  return u?.permissions || null
}
