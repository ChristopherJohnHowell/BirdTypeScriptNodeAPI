import express from 'express';
import bodyParser from 'body-parser';
import birdRoutes from './routes/birdRoutes';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api', birdRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
