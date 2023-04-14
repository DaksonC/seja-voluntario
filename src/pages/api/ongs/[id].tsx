import { pool } from '@/config/db'
import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'DELETE':
      return deleteONG(req, res)
    default:
      return res.status(405).json({ message: 'Method not allowed' })
  }
}

async function deleteONG(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query

    await pool.query('DELETE FROM ongs WHERE id = ?', [id])

    return res.status(204).json({ message: 'ONG deleted' })
  } catch (error) {
    return res.status(500).json({ error })
  }
}
