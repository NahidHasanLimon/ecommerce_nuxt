<template>
    <!-- login Area Strat-->
    <section class="login-area pt-100 pb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 offset-lg-2">
                    <div class="basic-login">
                        <h3 class="text-center mb-60"> Registration From Here</h3>
                        <form enctype="multipart/form-data" @submit.prevent="register">
                            <label for="name">Name <span>**</span></label>
                            <input v-model="user.name" id="name" type="text" placeholder="Enter Username or Name..." />
                            <label for="phone number">phone number <span>**</span></label>
                            <input v-model="user.phoneNumber" id="phone number" type="text" placeholder="Enter Userphone number or phone number..." />
                            <label for="email">Email Address <span>**</span></label>
                            <input v-model="user.email" id="email" type="text" placeholder="Enter Useremail or Email address..." />
                            <label for="pass">Password <span>**</span></label>
                            <input  v-model="user.password" id="pass" type="password" placeholder="Enter password..." />
                            
                            <label for="pass">Photo <span>**</span></label>
                            <input type="file"  name="photo" id="photo" @change="onFileChange" placeholder="Enter password..." />
                            
                            <div id="preview" class="m-2">
                                <img class="rounded mx-auto d-block" v-if="user.photo" :src="user.photo" height="60" width="60" />
                            </div>

                            <button class="btn theme-btn-2 w-100">Register Now</button>
                            <div class="or-divide"><span>or</span></div>
                            <nuxt-link class="btn theme-btn w-100" to="/login">Login Now</nuxt-link> 
                            
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
    name: "RegistationComponent",
    components: {
        
    },
    data() {
        return {
        user: {
            email: "",
            password: "",
            name:"",
            photo:"",
            phoneNumber: ""

        }
        };
    },
    methods: {
        async register() {
            console.log('This is registration method!',JSON.stringify( this.user))
            let formData = new FormData()
        },
        onFileChange(e) {
            const file = e.target.files[0]
            this.image = file
            this.user.photo = URL.createObjectURL(file)
        }
    },
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;  // it check if user isAuthenticated 
        }
    }
}
</script>
