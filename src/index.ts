import express, {Response} from 'express';

const app = express();
const PORT = 8000;

app.use(express.json());

app.get('/', (req, res): void => {
    res.send('Hello, welcome to the classroom API');
})

app.listen(PORT, () => console.log(
    `Listening on port http://localhost:${PORT}`)
);