<template>
  <div class="user-search">
    <label for="search">
      <input type="text" id="userSearch" placeholder="请输入关键词" v-model="value"/>
      <i>x</i>
    </label>
  </div>
</template>

<script>
export default {
  props:{
    data:{
      type:Object|Array,
      default(){
        return {};
      }
    }
  },
  data(){
    return {
      value:null,
      backData:null,
    }
  },
  methods:{

   
  },
  updated(){
      let storeArry = [];
      if(this.value === ""){
        this.backData = this.data;
      }else{
        this.data.forEach((element,i)=> {
          for (let [key, value] of Object.entries(element)) {

            var reg = new RegExp(`(.*)(${value.split('').join(')(.*)(')})(.*)`, 'i');
            if(reg.test(this.value)){
              storeArry.push(this.data[i]);
              break;
            }
          }
        });
        this.backData = storeArry;
      }

    this.$emit('searchVal',this.backData)
  }

}
</script>

<style scoped>
.user-search input {
  padding-left: 10px;
  width: 210px;
  height: 27px;
}
input:focus {
  border: 1px solid rgb(64, 158, 255);
}
input {
  outline: none;
  border: 1px solid rgb(198, 226, 255);
  border-radius: 4px;
}
</style>