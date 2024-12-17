import express from 'express';
import cors from 'cors';
import routes from './routes';
import authMiddleware from './middlewares/authMiddleware';
import errorHandler from './middlewares/errorHandler';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', routes);
app.use(errorHandler);
app.use(authMiddleware);

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000/api/');
});

export default app;
