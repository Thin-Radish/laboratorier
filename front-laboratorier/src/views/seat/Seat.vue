<template>
  <div class="seat">

    <seat-nav/>
    <seat-content/>
  </div>
</template>

<script>
import SeatNav from "views/seat/childComps/SeatNav"
import SeatContent from './childComps/seatContent/SeatContent.vue'

  export default {
  components: { 
    SeatNav,
    SeatContent,
  
  },
    
  }
</script>

<style scoped>

.seat{
  width: 100%;
}

</style>