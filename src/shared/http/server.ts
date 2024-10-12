import express from 'express';
import cors from 'cors';
import routes from '../router';  // Certifique-se de que a importação esteja correta

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log("Server is running on port 3333! 🚀");
});
