
import type { NextApiRequest, NextApiResponse } from 'next'
import {users} from '../../db'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    res.status(200).json(users);
  
}
