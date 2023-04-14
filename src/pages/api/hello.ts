// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { pool } from '@/config/db'
import { FieldPacket, RowDataPacket } from 'mysql2'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const [rows]: [RowDataPacket[], FieldPacket[]] = await pool.query(
    'SELECT NOW()',
  )

  return res.status(200).json(rows[0]['NOW()'])
}
