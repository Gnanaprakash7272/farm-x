import { savePermissions, getPermissions } from '../../src/server/permissions'

export default async function handler(req, res){
  if(req.method === 'POST'){
    const { userId, permissions } = req.body
    if(!userId) return res.status(400).json({ error: 'missing_userId' })
    try{
      const updated = await savePermissions(userId, permissions)
      return res.json({ success: true, permissions: updated.permissions })
    }catch(e){
      return res.status(500).json({ success: false, error: String(e) })
    }
  }
  if(req.method === 'GET'){
    const { userId } = req.query
    if(!userId) return res.status(400).json({ error: 'missing_userId' })
    const perms = await getPermissions(userId)
    return res.json({ success: true, permissions: perms })
  }
  res.status(405).end()
}
