<template>
  <div id="app">
    
      <head-nav/>

      <div class="content">   
        <main-nav class="main-nav"/>
        <div class="main-content"><router-view/></div>
      </div>
      
      <footer></footer>
  </div>
</template>

<script>
import MainNav from 'components/content/MainNav.vue'
import HeadNav from './components/content/HeadNav.vue'
export default {
  name: 'App',
  components: { 
    MainNav,
    HeadNav
  
  },
  methods:{
  }
}
</script>

<style scoped>
  @import "./assets/css/base.css";

  .content {
    display: flex;
    width: 100%;
  }

  .main-content{
    width: 100%;
    padding: 40px;
  }


</style>