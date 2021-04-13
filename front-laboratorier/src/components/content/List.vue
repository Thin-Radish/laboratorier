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
          <!-- {{ value }} -->
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
  margin-top: 20px;
}

.list-content li:first-child {
  font-weight: bolder;
}

li {
  display: flex;
  justify-content: start;
  padding: 10px 0px;
}
.list-item {
  border-bottom: 1px solid rgb(217, 236, 255);
}
li div {
  width: 100%;
  margin-right: 10%;
  text-align: center;
}
p{
  line-height: 50px;
}

img {
width: 50px;
}
</style>