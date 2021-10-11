
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Application from '@ioc:Adonis/Core/Application'


import authConfig from 'Config/auth'


export default class UsersController {
    // public async index(){


    //     const user_data = [
    //         {
    //             user_id : '1',
    //             first_name: 'Jamal',
    //             last_name: 'Ahmed',
    //             email: 'mohammad@gmail.com',
    //             password:'12345',
    //             username:'jamil993',
    //             profile_pic: ' ',
    //             gender:'male',
    //             status:'single'
    //         }
    //     ]
    //     return {user_data}
    // }





    public async store({request}: HttpContextContract){

        // let data = request.all() ; 
        // return data ; 
       
        const user = await new User() ; 

        user.user_id = ''
        user.first_name = request.all().f_name
        user.last_name = request.all().l_name
        user.email = request.all().email
        user.password = request.all().pass
        user.username = 'jamil993'
        user.profile_pic = ''
        user.gender = 'male'
        user.status = 'single'

        console.log('Data Saved')

        await user.save() 
        
    }





    public async show({}:HttpContextContract){
        return User.all(); 
    }
































    
    public async login({request, response ,auth }: HttpContextContract){


       
        const user = await User.query().where('email',request.all().email).where('password',request.all().password).first()
        

        // console.log(user)
        // if(user){
        //     console.log('sucess')
        //     return user
        // }
        // else{
        //     console.log("Wrong")
        //     return {
        //         msg:'Dont do it I am calling from login backend user rejection status'

        // if (!(await Hash.verify(user.password, request.all().password))) {
        //     return response.badRequest('Invalid credentials')
        //   }
        

        await auth.use('web').login(user)
        return user





        
    }

    



    async getUser({ auth }: HttpContextContract) {
        return auth.use('web').authenticate()
      }
    






}


