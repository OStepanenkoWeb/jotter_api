import { NextFunction, Request, Response } from 'express';

export const cors = (req: Request, res: Response, next: NextFunction): void => {
  // res.set('Access-Control-Allow-Headers', '*');
  res.set('Access-Control-Allow-Headers', 'Authorization, Content-Type');
  res.set(
    'Access-Control-Allow-Methods',
    'PUT, POST, GET, DELETE, PATCH, OPTIONS'
  );
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Credentials', 'true');
  next();
};
