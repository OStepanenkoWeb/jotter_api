import { Express } from 'express';
import { bodyParser } from '@main/middlewares/body-parser';
import { cors } from '@main/middlewares/cors';
import { contentType } from '@main/middlewares/content-type';
import env from '@main/config/env';

export default (app: Express): void => {
  app.use(bodyParser);
  app.use(cors({ origin: env.uiHost, credentials: true }));
  app.use(contentType);
};
