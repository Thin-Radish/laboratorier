<template>
  <div class="materi-nav">
    <nav-content styleNav="row" class="materi-header"> 
        <nav-item v-for="item in labsId" :key="item.id" :path="'/materials/' +  item.id">
            <div slot="nav-text">{{item.desc}}</div>
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
      this.labsId = [{id:"All",desc:"物资总集"},{id:"F608",desc:"F608"},{id:"F609",desc:"F609"},{id:"F607",desc:"F607"}]
  }

}
</script>

<style scoped>


</style>