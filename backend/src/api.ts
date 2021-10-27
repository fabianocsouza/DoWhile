import 'dotenv/config';
import express from 'express';
import cors from "cors";
import http from "http";
import {Server } from "socket.io";

import { router } from './routes';

const api = express();
api.use(cors());

const serverHttp = http.createServer(api);

const io = new Server(serverHttp, { 
  cors: {
    origin: "*"
  }
});

io.on("connection", socket => {
  console.log(`Usuário conectado no socket ${socket.id}`);
  
})

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
});

export {serverHttp, io}