<template>
  <div>
    <button  v-on:click="myMsg()">Click me</button>
  </div>
</template>

<script>
export default {
  name:"BtnClick",
  methods:{
    myMsg(event){
      alert("Every thing is ok");
    }
  }
}
</script>
