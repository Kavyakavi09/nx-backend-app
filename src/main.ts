import express from 'express';
import { auth } from '../auth/src/lib/auth'
import cors from "cors"

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3333;

const app = express();
app.use(cors())

app.get('/', (req, res) => {
  res.send({ message: 'Hello Product API' });
});

app.post('/auth', (req, res) => {
  res.send(auth());
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
