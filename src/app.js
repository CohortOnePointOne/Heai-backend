import express from 'express';
import error from './middleware/error';
import connect from './db/mongoose.js';
import routes from './routes/index.js';

connect();
const app = express();
app.use(express.json());
app.use(routes);
app.get('/', (req, res) => {
  return res.status(200).send('Home');
});
app.use((req, res) => {
  return res.status(404).json({ message: 'resource not found' });
});
app.use(error);
export default app;
