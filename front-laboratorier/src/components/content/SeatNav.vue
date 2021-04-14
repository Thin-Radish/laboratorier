<template>
  <div>
    <nav-content styleNav="row" > 
      <nav-item path="/seat/f309">
        <div slot="nav-text">F309</div>
      </nav-item>
      <nav-item path="/seat/f308">
        <div slot="nav-text">F308</div>
      </nav-item>
    </nav-content>
  </div>
</template>

<script>
import NavContent from 'components/common/nav/NavContent.vue'
import NavItem from 'components/common/nav/NavItem.vue'
  export default {
    components: { 
      NavContent,
      NavItem
    },
  }
</script>

<style scoped>

</style>