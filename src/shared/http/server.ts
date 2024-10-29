import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import routes from './router';
import AppError from '../erros/AppError';
import '../typeorm';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// Middleware para tratamento de erros
app.use((error: AppError | Error, request: Request, response: Response, next: NextFunction): void => {
  console.error('Erro capturado pelo middleware:', error); // Log adicional para depuração
  if (error instanceof AppError) {
    response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  } else {
    response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
});


app.listen(3333, () => {
  console.log("Server is running on port 3333! 🚀");
});
