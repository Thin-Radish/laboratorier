<template>
  <div class="hygiene-tab">
    <div class="tab-nav">
      <tab-nav />
    </div>
    <router-view/>
  </div>
</template>

<script>


import TabNav from "./childComps/TabNav.vue";

export default {
  name: "HygieneTab",
  components: {
    TabNav,
    
  },

};

</script>

<style scoped>
.hygiene-tab {
  width: 100%;
  min-width: 1000px;
}
.tab-nav {
  width: 100%;
}


</style>