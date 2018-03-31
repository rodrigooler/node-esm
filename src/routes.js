import Router from 'koa-route';

const router = new Router();

router.use("/", async(ctx) => {
    ctx.body = "'ES Modules fast config and zero-dependency for Node 6+!'";
})

export default router;