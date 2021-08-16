import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import apiRouter from '@/api/routes';

export default ({ app }: { app: Application }) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors());
  app.use(cookieParser());

  app.use('/api', apiRouter);

  app.use((req: Request, res: Response, next: NextFunction) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  app.use((err: Error, req: Request, res: Response) => {
    console.log(err);
    res.status(err.status || 500).json({
      error: err.message,
    });
  });
};
