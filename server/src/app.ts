import express from 'express';
import loaders from './loaders';

import env from './config';

async function startServer() {
  const app = express();

  await loaders.init({ app });

  app.listen(env.PORT, () => {
    console.log(`app listening at http://localhost:${env.PORT}`);
  });
}

startServer();
