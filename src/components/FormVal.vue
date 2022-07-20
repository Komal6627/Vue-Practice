<template>
    <div>
        <h1>Form Validation</h1> 
       <p v-if="error.length">
          <b>Please correct the following error </b>
          <ul>
              <li v-for="e in error" v-bind:key="e.id">{{e}}</li>
          </ul>
       </p>
        <form @submit="login">
              <input type="text"  name="username" placeholder="Enter the User name" v-model="name"/>
               <br /><br />
              <input type="password" name="password" placeholder="Enter the Password" v-model="password"/>
              <br /><br />
              <button type="submit">Login</button>
        </form>
    </div>
        
</template>

<script>
    export default {
      name:"FormVal",
      data(){
        return{
          error:[],
          name:null,
          password:null
        }
      },
      methods:{
          login(e){
            this.error=[];
              if(this.name && this.password){
                console.warn("no error");
              }
              if(!this.name){
                this.error.push("User name require");
              }
              if(!this.password){
                this.error.push("Password require");
              }
              console.warn("Hello",this.error);
              e.preventDefault();
          }
      }
    }
</script>