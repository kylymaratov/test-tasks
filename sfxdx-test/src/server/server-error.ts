import { NextFunction, Request, Response } from 'express';

export interface ServerErrorInterface {
  message: string;
  statusCode?: number;
  stack?: string[];
}

export class ServerError implements ServerErrorInterface {
  name: string;
  message: string;
  statusCode: number;
  stack: string[];

  constructor(arg: ServerErrorInterface) {
    this.name = this.constructor.name;
    this.message = arg.message;
    this.statusCode = arg.statusCode || 500;
    this.stack = arg.stack || [];
  }
}

const setServerError = (
  err: Error | ServerError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!err) return next();

  if (err instanceof ServerError) {
    res.status(err.statusCode).json({
      module: err.name,
      statusCode: err.statusCode,
      message: err.message,
      path: req.url,
      stack: err.stack,
    });
  } else {
    res.status(500).json({ message: 'Server internal error' });
  }
};

export default setServerError;
