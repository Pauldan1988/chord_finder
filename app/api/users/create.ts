import { NextApiRequest, NextApiResponse } from 'next';
import { database } from '../../lib/middleware';
import User from '../../models/User';
import next from 'next/types';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await database(req, res, next);  // Ensure database connection

  if (req.method === 'POST') {
    const { name, email, password } = req.body;
    
    // Check for existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Email already in use.' });
    }

    // Create a new user
    try {
      const user = await User.create({ name, email, password });
      return res.status(201).json({ success: true, data: user });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Error creating user.' });
    }

  } else {
    return res.status(405).json({ success: false, message: 'Method not allowed.' });
  }
}