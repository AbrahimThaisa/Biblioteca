import "reflect-metadata"; //tsyringe requires a reflect polyfill. Please add 'import "reflect-metadata"' to the top of your entry point.
import express, { Request, Response, NextFunction } from "express";
const path = require('path');
import "express-async-errors";
import cors from "cors";

import "@shared/container";
import createConnection from "@shared/infra/typeorm";

import { AppError } from "@errors/AppError";
import { router } from "./routes";

createConnection();

const app = express();

app.use(express.json());

app.use(cors());
app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`
    });
  }
);

const publicPath = path.join(__dirname, '../../../frontend');

// Configurar o diretório raiz
app.use(express.static(publicPath));

const frontendPath = path.join(__dirname, '../../../frontend/index.html');

app.get('/', (req, res) => {
  res.sendFile(frontendPath);
});

export { app }