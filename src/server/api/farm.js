import { prisma } from '../db'

export async function getFarms() {
  return await prisma.farm.findMany()
}
