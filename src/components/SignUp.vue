<template>
    <div>
          <h1>Form with checkbox and radio button </h1>
        <input type="text" placeholder="Enter the name" v-model="signup.username"/> <br><br>
        <input type="password" placeholder="Enter the password" v-model="signup.password" /> <br>

        <p >Choose Hoobies</p>
        <input type="checkbox" id="cricket" value="cricket" v-model="signup.hobbies"/>
        <label for="cricket">Cricket</label>
        <input type="checkbox" id="football" value="football" v-model="signup.hobbies"/>
        <label for="football">Badminton</label>
        <br>

        <p >Select Gender</p>
        <input type="radio" id="male" value="male" v-model="signup.gender"/>
        <label for="male">Male</label>
        <input type="radio" id="female" value="female" v-model="signup.gender" />
        <label for="female">Female</label>

        <br>
        <button v-on:click="signupUser">Sign Up</button>
    </div> 
</template>

<script>
    export default {
      name:"SignUp",
      data(){
        return{
          signup:{
            username:null,
            password:null,
            hobbies:[],
            gender:null
          }
        }
      },
      methods:{
        signupUser(){
          console.log(this.signup);
        }
      }
    }
</script>