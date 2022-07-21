const { createApp } = require('vue');
import App from "./App.vue";


Vue.config.productionTip = false
// Vue.filter("Ucase", function(val){
//     return val.toUpperCase();
// })
createApp(App).mount("#app");
