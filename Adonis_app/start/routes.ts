import Route from '@ioc:Adonis/Core/Route'


Route.get('/user','UsersController.show') ; 
Route.get('/','UsersController.index') ; 
Route.post('/user', 'UsersController.store') ;
Route.post('/login', 'UsersController.login') ;
Route.get('/getUser', 'UsersController.getUser')



