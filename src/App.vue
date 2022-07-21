<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="https://vuejs.org/images/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Child v-bind:name="userName" /> -->
    <!-- <Child v-bind:users="users"/> -->
    <!-- <h1>{{title}}</h1>
    <ChildToParent v-on:changeTitle="updateTitle($event)"/> -->
    <!-- <SignUp /> -->
    <!-- <Login /> -->
    <!-- <FormVal/> -->
    <h1>{{name}}</h1>
    <Filter />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
//import Child from './components/Child';
//import ChildToParent from './components/ChildToParent';
// import SignUp from "./components/SignUp";
//import Login from "./components/Login";
// import FormVal  from "./components/FormVal";
import Filter from "./components/Filter";

export default {
  name: 'App',
  components: {
    // HelloWorld
    // Child
    // ChildToParent
    // SignUp
    //  Login
    // FormVal 
    Filter
  },
  // data(){
  //   return {title:"Props Tutorial"}
  // }
  // data(){
  //  // return { userName:"Komal Killedar"}
  //  return{
  //    users:[
  //      {name:"Komal", email:"komal@gmail.com"},
  //      {name:"Dimple", email:"dimple@gmail.com"},
  //      {name:"Hayat", email:"hayat@gmail.com"}
  //    ]
  //  }
  //}
  // data(){
  //   return {title:"Props Tutorial"}
  // },
  // methods:{
  //   updateTitle(title){
  //     this.title = title
  //   }
  // }
    data(){
      return {
        name: "Komal"
      }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
