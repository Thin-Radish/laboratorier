<template>
  <div>
    <ul class="list-content">
      <li>
        <div v-for="(item, index) in listHead" :key="index">{{ item }}</div>
      </li>
      <li v-for="(item, index) in items" :key="index" class="list-item">
        <div v-for="(value, name, index) in item" :key="index">
          <p v-if="value.split('.')[2]!='svg'">{{ value }}</p> 
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
};
</script>

<style scoped>
.list-content {
  margin-top: 25px;
}

.list-content li:first-child {
  font-weight: bolder;
}

li {
  display: flex;
  /* margin-top: 10px; */
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