<template>
        <!-- login Area Strat-->
        <section class="login-area pt-100 pb-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                        <div class="basic-login">
                            <h3 class="text-center mb-60">Logged User</h3>
                                <label for="name">Name </label>
                                <input  id="name" type="text" v-model="loggedInUser.name" disabled/>
                                <label for="phone_number">Phone Number </label>
                                <input  id="phone_number" v-model="loggedInUser.phone" disabled />
                                <label for="email">email </label>
                                <input  id="email" v-model="loggedInUser.email" disabled />
                                <label for="address">Address </label>
                                <!-- <input  id="address"   v-model="loggedInUser.address.area " disabled /> -->

                                <div class="or-divide"><span></span></div>
                                <button class="btn theme-btn w-100" @click="logout">Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- login Area End-->
</template>
<script>

    export default {
        name: "UserPage",
        components: {
            
        },
        data() {
            return {
                
            };
        },
        methods: {
            async logout() {
                 await this.$auth.logout();  // this method will logout the user and make token to false on the local storage of the user browser
            }
        },
        computed: {
            isAuthenticated() {
                return this.$store.getters.isAuthenticated;  // it check if user isAuthenticated 
            },
            loggedInUser() {
                return this.$store.getters.loggedInUser;  // it check if user isAuthenticated 
            }
        }
    }
    </script>
    