import Koa from 'koa';
import Body from 'koa-body';
import userRouter from './router/Users.js'

const app = new Koa();

app.use(Body());

app.use(async context=>{
    context.body={
        massege:"Get Koa"
    }
})
app.use(userRouter.route());
app.listen(8080,()=>console.log("listening Koa, No Express"))

