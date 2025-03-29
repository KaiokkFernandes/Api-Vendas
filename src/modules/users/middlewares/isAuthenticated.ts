import { verify } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import auth from '@config/auth';

export default function isAuthenticated(req: Request, res: Response, next: NextFunction): void {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        throw new Error('JWT token is missing');
    }

    // destruturação do token
   const [, token] = authHeader.split(' ');

   try{
      const decodedToken = verify(token, auth.jwt.secret);

      console.log(decodedToken);

      return next();
   }catch{
      throw new Error('Invalid JWT token');
   }
}
