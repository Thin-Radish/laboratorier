<template>
  <div class="acco-nav">
    <nav-content styleNav="row" class="acco-header"> 
        <nav-item v-for="item in labsId" :key="item" :path="'/account/' +  item">
            <div slot="nav-text">{{item}}</div>
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
  data() {
      return {
        labsId: null
      }
  },
   created() {
      this.labsId = ["F609","F608","F607"]
  }

}
</script>

<style scoped>


</style>