<template>
  <div class="user-info">
    <user-header :userNum="userNum" >
      <filter-search @searchVal="getSearchVal" 
                  :searchData = "users" 
                  :isSelect="true"
                  :selectData="labsId"/>
    </user-header>
    <user-list :listHead="listHead" :items="showUsers" />
  </div>
</template>

<script>
import UserHeader from "./childComps/UserHeader.vue";
import FilterSearch from "../../components/common/search/FilterSearch";
import UserList from "../../components/content/List.vue";

import {getUserInfo} from '../../network/reqData';

export default {
  name: "UserInfo",
  components: { 
    UserHeader, 
    FilterSearch, 
    UserList 
  },

  data() {
    return {
      showUsers:null,
      users:null,
      
      userNum: 50,
      labsId: ["F609","F608"],
      listHead: ["头像", "姓名", "专业班级", "学号", "所属实验室","位置号"],
    };
  },
  
  methods:{
    getSearchVal(value){
      this.showUsers = value;
    },

  },
  mounted() {
    getUserInfo().then(res => {
       this.users = res;
      this.showUsers = this.users;
    }
   )
  },

  created(){
    this.showUsers = this.users;
  },

};
</script>

<style scoped>

</style>