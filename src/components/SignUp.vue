<template>
    <div>
          <h1>Form with checkbox and radio button </h1>
        <input type="text" placeholder="Enter the name"/> <br><br>
        <input type="password" placeholder="Enter the password"/> <br>

        <p>Choose Hoobies</p>
        <input type="checkbox" id="cricket" value="cricket"/>
        <label for="cricket">Cricket</label>
        <input type="checkbox" id="football" value="football"/>
        <label for="football">Badminton</label>
        <br>

        <p>Select Gender</p>
        <input type="radio" id="male" value="male"/>
        <label for="male">Male</label>
        <input type="radio" id="male" value="male"/>
        <label for="male">Female</label>
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
      }
    }
</script>