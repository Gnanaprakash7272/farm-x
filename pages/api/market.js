export default async function handler(req, res){
  const { query } = req.query
  // Placeholder: integrate market APIs or COMPOSIO_SEARCH_FINANCE in workbench for live data
  return res.json({ success: true, query, prices: [{ location: 'Local Market', price: '2000 INR/q' }] })
}
