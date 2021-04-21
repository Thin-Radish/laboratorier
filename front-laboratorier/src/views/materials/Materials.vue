<template>
  <div class="materials">
    <materi-nav/>
    <materi-lab/>
  </div>
</template>

<script>
import MateriNav from './childComps/MateriNav'
import MateriLab from './childComps/MateriLab'
export default {
  components:{
    MateriLab,
    MateriNav
  },
}
</script>

<style scoped>
.materi-nav {
  position: fixed;
  width: 95%;
  z-index: 999;
  top:57px;
  background-color: white;
}
</style>