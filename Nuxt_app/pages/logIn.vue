<template>
    <div>
        <div class="_2menu">
            <div class="_2menu_con">
                <div class="row align-items-center">
                    <div class="col">
                        <router-link to="/">
                            <h3 class="_menu_logo_text">
                                <span class="_menu_logo_symbol">C</span>
                                <span class="_menu_logo_text_main">CONNECTIVER</span>
                            </h3>
                        </router-link>
                    </div>

                    <div class="col-auto">
                        <router-link to="/signup">
                            <button class="_log_btn _2menu_long" type="button">Sign Up</button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>

        <!-- Banner -->
        <div class="_4banner">
            <div class="_4banner_main">
                <h1 class="_4banner_title">Connectiver</h1>
                <p class="_4banner_text">Creating a conscious and safe community where human<br/> connection and new ideas can thrive</p>
            </div>
        </div>
        <!-- Banner -->

        <!-- Form -->
        <div class="_log_form_main">
            <h2 class="_log_form_title">Login</h2>

            <div class="_log_form">
                <div class="_log_input_group">
                    <input class="_log_input" placeholder="Email" v-model="loginObj.email" type="text">
                </div>
                <div class="_log_input_group">
                    <input class="_log_input" placeholder="Password" v-model="loginObj.password" type="password">
                </div>
                <div class="_log_button">
                    <button v-on:click="login" class="_log_btn _btn_long">Login</button>
                </div>

                <p class="_log_forget"><router-link to="/forgetPassword">Forgot password?</router-link></p>
            </div>
        </div>
        <!-- Form -->
    </div>
</template>

<script>
import axios from "axios"

export default {
    data(){
        return{
            loginObj:{
                email:"",
                password:""  
            },
        }
    },methods:{
        async  login(){
           
            const res = await axios.post("http://127.0.0.1:3333/login", this.loginObj)
            console.log('Showing res status')
            console.log(res.status)

            if(res.status==200){
               // this.$store.commit("setUserInfo", res.data)

                console.log('success going from login vue login method')
                console.log(res.data)
            
            }
            
        }

    }
}
</script>