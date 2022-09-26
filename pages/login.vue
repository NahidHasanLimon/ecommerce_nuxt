<template>
        <!-- login Area Strat-->
        <section class="login-area pt-100 pb-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                        <div class="basic-login">
                            <h3 class="text-center mb-60">{{this.$auth.loggedIn}} Login From Here {{isAuthenticated}}</h3>
                            <form @submit.prevent="login">
                                <label for="email">Email Address <span>**</span></label>
                                <input v-model="loginData.email" id="email" type="text" placeholder="Enter Useremail or Email address..." />
                                <label for="pass">Password <span>**</span></label>
                                <input  v-model="loginData.password" id="pass" type="password" placeholder="Enter password..." />
                                <div class="login-action mb-20 fix">
                                    <span class="log-rem f-left">
                                        <input id="remember" type="checkbox" />
                                        <label for="remember">Remember me!</label>
                                    </span>
                                    <span class="forgot-login f-right">
                                        <a href="#">Lost your password?</a>
                                    </span>
                                </div>
                                <button class="btn theme-btn-2 w-100">Login Now</button>
                                <div class="or-divide"><span>or</span></div>
                                <nuxt-link to="/register" class="btn theme-btn w-100">Register Now</nuxt-link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- login Area End-->
</template>
<script>

    export default {
        name: "LoginPage",
        components: {
            
        },
        data() {
            return {
            loginData: {
                email: "",
                password: ""
            }
            };
        },
        methods: {
            async login() {
            try {
                let response = await this.$auth.loginWith("local", {
                    data: this.loginData
                });
                this.$router.push("/");
                console.log(response);
            } catch (err) {
                console.log(err);
            }
            }
        },
        computed: {
            isAuthenticated() {
                return this.$store.getters.isAuthenticated;  // it check if user isAuthenticated 
            }
        }
    }
    </script>
    