import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
const router = express.Router();

app.use(cors());

app.use('/', router);

router.get('/', (req: Request, res: Response) => res.status(200).send('The app in on!'));

app.listen(3030);
