// pages/api/search.ts
import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query, owner, lawFirm, attorney, status } = req.query

  try {
    // Replace with actual API URL from your Postman documentation
    const response = await axios.get('https://api.example.com/search', {
      params: { query, owner, lawFirm, attorney, status },
    })
    res.status(200).json(response.data)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' })
  }
}
