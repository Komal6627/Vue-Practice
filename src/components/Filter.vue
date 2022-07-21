<!-- Local filter in VueJS -->
<!-- Template -->
<template>
  <div>
    
    <!-- Applying Uppercase filter -->
    <h1>{{ name| uppercase }}</h1>
  </div>
</template>
  
<!-- Filter defined locally -->
<script>
export default {
  data: function() {
    return {
      name: "geeksforgeeks"
    };
  },
  filters: {
    uppercase: function(value) {
      return value.toUpperCase();
    }
  }
};
</script>
