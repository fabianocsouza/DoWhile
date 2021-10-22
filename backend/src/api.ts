import 'dotenv/config';
import express from 'express';

import { router } from './routes';

const api = express();

api.use(express.json());
api.use(router);

api.get("/github", (request, response) => {
  response.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.
    GITHUB_CLIENT_ID}`
  );
});

api.get('/signin/callback', (request, response) => {
  const { code } = request.query;
  response.json(code);
})

api.listen(3333, () => console.log('Server is running on PORT 3333 🚀'));