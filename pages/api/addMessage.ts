import type { NextApiRequest, NextApiResponse } from 'next';
import redis from '../../redis';
import { Message } from '../../typings';

type Data = {
  message: Message;
};

type ErrorData = {
  body: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorData>
) {
  if (req.method !== 'POST') {
    res.status(405).json({ body: 'Method not Allowed' });
    return;
  }

  const { message } = req.body;

  const newMessage = {
    ...message,
    // replace the timestamp based on locale
    created_at: Date.now(),
  };

  // Send message to the API
  await redis.hset('messages', message.id, JSON.stringify(newMessage));

  res.status(200).json({ message: newMessage });
}
