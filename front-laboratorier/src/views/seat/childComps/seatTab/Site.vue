<template>
  <div class="site">
    {{loca}}
  </div>
</template>

<script>
  export default {
    props:{
      loca:String,
      
    },
    
  }
</script>

<style scoped>

.site {
  width: 32%;
  height: 60px;
  background:#d9ecff;
  border: 1px solid #409eff;

  float: left;

  line-height: 60px;
  text-align: center;

}
.site:hover{
  opacity: 0.8;
  cursor: pointer;
}
</style>