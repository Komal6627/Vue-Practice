<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="https://vuejs.org/images/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Child v-bind:name="userName" /> -->
    <!-- <Child v-bind:users="users"/> -->
    <ChildToParent v-on:changeTitle="updateTitle"/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
//import Child from './components/Child';
import ChildToParent from './components/ChildToParent';

export default {
  name: 'App',
  components: {
    // HelloWorld
    // Child
    ChildToParent
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
