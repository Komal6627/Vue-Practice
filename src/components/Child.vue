<template>
    <h1>Child Component</h1>
    <!-- <h3>{{name}}</h3> -->
    <h3 v-for="item in users " :key="item.name">
      {{item.name}}  {{item.email}}
    </h3>
</template>

<script>
  export default{
     name:"Child",
     props:['users'],
  }
  
</script>