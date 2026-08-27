import express, {Response} from 'express';
import cors from 'cors';

import subjectsRouter from "./routes/subjects.ts";

const app = express();
const PORT = 8000;

app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))

app.use(express.json());

app.use('/api/subjects', subjectsRouter);


app.get('/', (req, res): void => {
    res.send('Hello, welcome to the classroom API');
})

app.listen(PORT, () => console.log(
    `Listening on port http://localhost:${PORT}`)
);