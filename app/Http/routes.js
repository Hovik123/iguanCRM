'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route');

Route.group('api', function () {
    Route.get('/user', 'UserController.index');
    Route.get('/usercreate', 'UserController.create');
    Route.get('/login', 'UserController.auth');
    Route.get('/check-login', 'UserController.checkLogin');
}).prefix("/api/v1");

