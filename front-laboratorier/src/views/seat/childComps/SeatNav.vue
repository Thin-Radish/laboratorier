<template>
  <div>
    <nav-content styleNav="row" > 
      <nav-item >
        <div slot="nav-text">实验室：</div>
      </nav-item>
      <nav-item path="/seat/f609">
        <div slot="nav-text">F609</div>
      </nav-item>
      <nav-item path="/seat/f608">
        <div slot="nav-text">F608</div>
      </nav-item>
      <nav-item >
        <filter-search slot="nav-text" :isSelect="false"/>
      </nav-item>
    </nav-content>
  </div>
</template>

<script>
import NavContent from 'components/common/nav/NavContent.vue'
import NavItem from 'components/common/nav/NavItem.vue'
import FilterSearch from 'components/common/search/FilterSearch.vue'
  export default {
    components: { 
      NavContent,
      NavItem,
      FilterSearch
    },
  }
</script>

<style scoped>

</style>