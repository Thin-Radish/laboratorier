<template>
  <div class="acco-header" ref="head">
    <p>{{labName}}实验室账本</p>

    <div class="in-money">
      <p>总收入:</p><p>{{moneyTotal.inMoney===""?"无":moneyTotal.inMoney}}</p>
    </div>
    <div class="out-money">
      <p>总支出:</p><p>{{moneyTotal.outMoney===""?"无":moneyTotal.outMoney}}</p>
    </div>
    <div class="all-money">
        <p>当前经费:</p><p>{{moneyTotal.allMoney===""?"无":moneyTotal.allMoney}}</p>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        moneyTotal:{
            type:Object,
        },
        labName:String
    },
    mounted(){
    this.$bus.$on("toggleNav",res=>{
      if(res === "15px"){
        this.$refs.head.style.width = "95%"
      }else{
        this.$refs.head.style.width = "85%"
      }
    })
  }

}
</script>

<style scoped>
.acco-header {
    position: fixed;
    display: flex;
    top:119px;
     width: 85%;
    height: 70px;
    line-height: 70px;
    background-color: white;
    z-index: 999;
    /* background-color: aquamarine; */
}
.acco-header > p{
    flex: 1
}
.acco-header div{
    width: 160px;
    text-align: center;
}
.acco-header div p{
    display: inline-block;
}
.acco-header div p:last-child{
    margin-left: 6px;
    color: rgb(64, 158, 255);
}
</style>