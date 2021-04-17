<template>
  <div  class="nav-item" @click="itemClick">

      <div class="icon" v-if="isActive"><slot name="nav-icon-active"></slot></div>
      <div v-else><slot name="nav-icon"></slot></div>
      
      <div class="text"  :style="activeStyle"><slot name="nav-text"></slot></div>

  </div>
</template>

<script>
  export default {
    props:{
      path:String,
      activeColor:{
        type:String,
        default:"#409eff"
      },
    },
    methods:{
      itemClick(){
        if (this.$route.path !== this.path) {
          this.$router.replace(this.path);
        } 
      },

    },
    computed:{
      isActive(){
        return this.$route.path.includes(this.path);
      },

      activeStyle(){
        return this.isActive?{color:this.activeColor}:{};
      }
    }
  }
</script>

<style scoped>
 
  .text{
      width: 80px;
      height: 30px;
      /* text-align: center; */
      line-height: 30px;
      font-size: 18px;
      flex: 1;
      color: #413e3e;
;
  }

  .text:hover{
    color: #409eff;
  }
</style>