import Router from "koa-router";

const router = new Router({
    prefix:"/users"
})

let users = [
    {id:1, first_name:"Lucas"},
    {id:1, first_name:"Pablo"}
]
router.get('/',context=>{
    context.body={
        status:"success",
        users
    }
})
export default router