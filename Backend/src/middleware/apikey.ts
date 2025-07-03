import { Request, Response, NextFunction } from 'express';
import ApiKey from '../models/ApiKey';

export const apiKeyMiddleware = async (req: Request, res: Response, next: NextFunction):Promise<any> => {
  const clientKey = req.headers['apikey'];
  const user = req.headers['user'];

  if (!clientKey || typeof clientKey !== 'string') {
    return res.status(403).json({ code: 403, message: 'Missing or invalid API key' });
  }
  if (!user || typeof user !== 'string') {
    return res.status(403).json({ code: 403, message: 'Missing or invalid user' });
  }

  try {
    const apiKey = await ApiKey.findOne({ where: { apikey: clientKey, user:user }});

    if (!apiKey) {
      return res.status(403).json({ code: 403, message: 'Unauthorized API key', result:apiKey });
    }

    next();
  } catch (err) {
    return res.status(500).json({ code: 500, message: 'Server error', error: err });
  }
};
