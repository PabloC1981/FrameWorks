'use strict'
const User = use('App/Models/User')
class UserController {
    getUsers(request,response){
        const userData = await User.all()
        response.ok({
            user:userData
        })
    }
}

module.exports = UserController
