import examplesRouter from './api/controllers/examples/router';

export default function routes(app) {
  app.use('/api/v1', examplesRouter);
}
