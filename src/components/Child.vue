<template>
    <h1>Child Component</h1>
    <h3>{{name}}</h3>
</template>

<script>
  export default{
     name:"Child",
     props:['name']
  }
</script>