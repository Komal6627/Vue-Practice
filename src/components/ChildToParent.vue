<template>
    <div>
        <h1>Passing props from parent to child</h1>
        <button v-on:click="updateTitle()">Update Parent Title</button>
    </div>
</template>

<script>
    export default {
        name:'ChildToParent',
        methods:{
            updateTitle(){
                this.$emit('changeTitle','Parent Updated')
            }
        }
    }
</script>