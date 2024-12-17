import type { Request, Response, NextFunction } from 'express';

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);

  if (err.name === 'ValidationError') {
    return res.status(400).json({ error: err.message });
  }

  if (err.name === 'UnauthorizedError') {
    return res.status(401).json({ error: 'No autorizado' });
  }

  if (err.name === 'PrismaClientKnownRequestError') {
    return res.status(500).json({ error: 'Error de base de datos' });
  }

  return res.status(500).json({
    error: 'Algo salió mal, por favor inténtalo más tarde.',
  });
};

export default errorHandler;
