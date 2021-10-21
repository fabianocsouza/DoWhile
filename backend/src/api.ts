import 'dotenv/config';
import express from 'express';

const api = express();

api.use(express.json());

api.get("/github", (request, response) => {
  response.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.
    GITHUB_CLIENT_ID}`
  );
})

api.listen(3333, () => console.log('Server is running on PORT 3333 🚀'));