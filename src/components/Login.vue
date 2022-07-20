<template>
  <div>
    <h1>Form</h1>
    <input type="text" v-model="loginForm.username" name="username" placeholder="Enter the User name" />
    <br /><br />
    <input type="password" v-model="loginForm.password" name="password" placeholder="Enter the Password" />
    <br /><br />
    <button  v-on:click='loginData'>Login</button>
  </div>
</template>

<script>
export default {
  name: 'Login',

   data()
   {
    return {loginForm:{
        username:null,
        password:null
      }
    }
  },

  methods: {
    loginData() {
      console.log('Login Data',this.loginForm);
    },
  },
}
</script>
