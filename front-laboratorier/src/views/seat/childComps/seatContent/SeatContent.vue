<template>
  <div class="lab">

    
    <div class="seat-tab"><router-view /></div>
    
    <div class="seat-info"><seat-info/></div>
  </div>
</template>

<script>
import SeatInfo from 'views/seat/childComps/seatContent/childComps/SeatInfo'
  export default {
    components: {
      SeatInfo,
    },
    
  }
</script>

<style scoped>
.lab{
  display: flex;
  width: 100%;
  height: 550px;
  margin-top: 10px;
}

.seat-tab{
  flex: 1;
  width: 70%;
  height: 100%;
}

.seat-info{
  width: 25%;
  height: 100%;
  background: cadetblue;
}

</style>