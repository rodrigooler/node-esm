import Koa from 'koa';

import router from './routes';

const app = new Koa();

app
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(3000);  