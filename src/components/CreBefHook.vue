<template>
    <h1>Before Created and Created</h1>
    <h1>{{name}}</h1>
</template>

<script>
    export default {
      name:"CreBefHook",
      data(){
            return{
                name:"Komal"
            }
        },
        created(){
           alert("Created");
        },
        beforeCreate(){
            alert("Before Created");
        }
    }


</script> 