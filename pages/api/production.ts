import type { NextApiRequest, NextApiResponse } from 'next';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function openDb() {
  return open({
    filename: './mydatastore.sqlite',
    driver: sqlite3.Database,
  });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { userId, processData } = req.body;
      const db = await openDb();
      await db.run(`
        CREATE TABLE IF NOT EXISTS production (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          user_id TEXT,
          process_data TEXT,
          created_at TEXT
        )
      `);
      await db.run(
        'INSERT INTO production (user_id, process_data, created_at) VALUES (?, ?, ?)',
        [userId, JSON.stringify(processData), new Date().toISOString()]
      );
      res.status(200).json({ message: 'Production process data saved successfully.' });
    } catch (error) {
      console.error('Database error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}