<template>
  <div class="tab-nav">
    <nav-content styleNav="row">
      <nav-item v-for="item in labsId" :key="item" :path="'/HygieneTab/hygiene' + item" >
        <div slot="nav-text">{{item}}</div>
      </nav-item>
    </nav-content>
  </div>
</template>

<script>
import NavContent from "../../../components/common/nav/NavContent";
import NavItem from "../../../components/common/nav/NavItem";

export default {
  components: {
    NavContent,
    NavItem,
  },
  data() {
    return {
      labsId: ['F608','F609']
    }
  }

};
</script>

<style scoped>

</style>