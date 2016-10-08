'use strict';
const User = use('App/Model/User');
class UserController {

  * index (request, response) {
    const users = yield User.all();
    yield response.send({ "message":"ok",data: users.toJSON(),error:0 })
  }

  * create(request, response) {
    console.log(request);

  }

  * store(request, response) {
    //
  }

  * show(request, response) {
    //
  }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    //
  }

  * destroy(request, response) {
    //
  }

  * auth(request ,response){
    const user = yield User.find(1);
    yield request.auth.check();

    // login using user object
    if(yield request.auth.login(user)){
      response.send({message:"ok"})
    }

  }

  * checkLogin(request,response){
    if(yield request.auth.check()){
      console.info(request.auth);
      //yield  response.send({message:"ok",data:request.auth})
    }
  }

}

module.exports = UserController;
