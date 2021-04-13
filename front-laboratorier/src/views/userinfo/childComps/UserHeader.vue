<template>
  <div class="header">
    <div class="user-num">全体成员列表({{ userNum }})</div>

    <div class="laboratory">
      <select value="">
        <option v-for="labora in laboratorys" :key="labora.laborid">
          {{ labora.laborid }}
        </option>
      </select>
    </div>

    <div class="user-search"><slot></slot></div>
  </div>
</template>

<script>
export default {
  props: {
    userNum: Number,
    laboratorys: Array,
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
.header .laboratory {
  flex-grow: 60;
  text-align: end;
}
.header .user-search {
  flex-grow: 1;
  margin-left: 5px;
}

select {
  outline: none;
  border: 1px solid rgb(198, 226, 255);
  border-radius: 4px;
}
.laboratory select {
  width: 100px;
  height: 30px;
}

select:focus {
  border: 1px solid rgb(64, 158, 255);
}
</style>