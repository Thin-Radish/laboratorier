<template>
  <div class="account">

    <acco-nav class="acco-nav "></acco-nav>
    <router-view/>
    
  </div>
</template>

<script>
import AccoNav from "./childComps/AccoNav"
export default {
  name: "Account",
  components: { 
    AccoNav
  },
  data() {
    return {
      
    }
    
  },
  created() {

  }
}
</script>

<style scoped>
.acco-nav {
  position: fixed;
  width: 95%;
  z-index: 999;
  top:57px;

  background-color: white;
}

</style>