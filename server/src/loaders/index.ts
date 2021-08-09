import express from 'express';
import expressLoader from './express';

const init = async ({ app }: { app: express.Application }) => {
  await expressLoader({ app });
};

export default { init };
