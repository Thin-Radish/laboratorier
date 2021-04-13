<template>
  <div class="header">
    <div class="user-num">全体成员列表({{ userNum }})</div>

    <div class="user-search"><slot></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    userNum: Number,
   
  },
};
</script>

<style scoped>
.header {
  overflow: hidden;
  display: flex;
}
.header .user-num {
  flex-grow: 1;
}

.header .user-search {

  margin-left: 5px;
}


</style>