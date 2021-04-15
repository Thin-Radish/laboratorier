<template>
  <div>
    <div>账单</div>
  </div>
</template>

<script>
  import { getAccount } from 'network/reqData'

  export default {

    mounted(){
      getAccount().then(res=>{
        console.log(res);
      })

      
    }
  }
</script>

<style scoped>

</style>