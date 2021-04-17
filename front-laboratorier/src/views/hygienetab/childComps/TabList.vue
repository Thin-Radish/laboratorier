<template>
  <tab-list
    :listHead="hygienetabs[labId].tabHead"
    :items="hygiene"
    :isObj="false"
    class="tab-list"
  />
</template>

<script>
import TabList from "../../../components/content/List.vue";

import { getHygiene } from 'network/reqData'

export default {
  components: {
    TabList,
  },

  data() {
    return {
      hygienetabs: {
        hygieneF608: {
          tabHead: ["", "星期一", "星期三", "星期五"],
          lab_id: "F608",
        },
        hygieneF609: {
          tabHead: ["", "星期一", "星期三", "星期四", "星期五"],
          lab_id: "F609",
        },
      },
    };
  },
  computed: {
    labId: function () {
      return this.$route.path.split("/")[2];
    },
  },
  mounted(){
      getHygiene().then(res=>{
        // console.log(res);
        this.hygiene = res
      })
    },
};
</script>

<style scoped>
.tab-list {
  margin-right: 5%;
  margin: 25px 5% 0 5%;
  border: 1px solid rgb(217, 236, 255);
}
</style>