<template>
  <div class="list">
    <div class="list-head" ref="head">
      <div v-for="(item, index) in listHead" :key="index" >{{ item }}</div>
    </div>
  
    <ul class="list-content">
      <li v-for="(item, index) in items" :key="index" class="list-item">
        <div v-for="(value, name, index) in item" :key="index">
          <p v-if="value.split('.')[1]!='com/30'">{{ value }}</p> 
          <img v-else :src="value">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    listHead: Array,
    items: Array,
  },
  mounted(){
    this.$bus.$on("toggleNav",res=>{
      if(res === "15px"){
        this.$refs.head.style.width = "95%"
      }else{
        this.$refs.head.style.width = "80%"
      }
    })
  }
};
</script>

<style scoped>
.list{
  width: 100%;
  
}

.list-head {
  width: 80%;
  height: 40px;
  min-width: 70%;
  display: flex;

  position: fixed;
  margin-top: 10px;

  background: white;
  z-index: 1;
  font-weight: bolder;
}
.list-head > div{

  width: 100%;
  margin-right: 40px;
  text-align: center;
}

.list-content {
  
  position: relative;
  top: 50px;

}


li {
  display: flex;
  height: 40px;
}
.list-item {
  border-bottom: 1px solid rgb(217, 236, 255);
}
li div {
  width: 100%;
  margin-right: 40px;
  text-align: center;
}
.list-item p{
  line-height: 40px;
}

.list-item img {
    display: block;
    margin-top: 2px;
    margin-left: 42%;
    width: 35px;
    border: 1px solid rgb(217, 236, 255);
    border-radius: 50%;
}
</style>