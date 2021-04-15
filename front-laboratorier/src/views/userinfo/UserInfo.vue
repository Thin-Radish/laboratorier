<template>
  <div class="user-info">
    <user-header :userNum="userNum" class="user-header">
      <filter-search @searchVal="getSearchVal" 
                  :searchData = "users" 
                  :isSelect="true"
                  :selectData="labId"/>
    </user-header>
    <user-list :listHead="listHead" :items="showUsers"  class="list"/>
  </div>
</template>

<script>

import UserHeader from "./childComps/UserHeader.vue";
import FilterSearch from "../../components/common/search/FilterSearch";
import UserList from "../../components/content/List.vue";

import {getUserInfo} from '../../network/reqData'


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
      labId: ["F609","F608"],
      listHead: ["头像", "姓名", "专业班级", "学号", "所属实验室","座位号"],
    };
  },
  
  methods:{
    getSearchVal(value){
      this.showUsers = value;
    },

  },

  mounted(){
    getUserInfo().then(res => {

      this.users = res;
      this.showUsers = this.users;
    })
    
  },

};
</script>

<style scoped>
.list{
  margin-top: 25px;
}

</style>