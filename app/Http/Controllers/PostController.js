'use strict';
const User = use('App/Model/User');

class PostController {
    * index (request, response) {
        const users = yield User.all()
        yield response.sendView('users', { users: users.toJSON() })
    }
}

module.exports = PostController
