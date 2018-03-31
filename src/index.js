import Koa from 'koa';

import message from './message';

const app = new Koa();

app
  .use(ctx => { ctx.body = message })
  .listen(3000);
