<template>
  <div class="user-info">
    <user-header :userNum="userNum" >
      <filter-search @searchVal="getSearchVal" 
                  :searchData = "users" 
                  :isSelect="true"
                  :selectData="labId"/>
    </user-header>
    <user-list :listHead="listHead" :items="showUsers" />
  </div>
</template>

<script>
import UserHeader from "./childComps/UserHeader.vue";
import FilterSearch from "../../components/common/search/FilterSearch";
import UserList from "../../components/content/List.vue";
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
      users: [
        {
          logo: require("../../assets/image/userLogo/宫崎骏 (1).svg"),
          name: "谢旗峰",
          class: "软件工程1902",
          id: "201903140100",
          laboraid: "F609",
        },
        {
          logo:  require("../../assets/image/userLogo/宫崎骏 (2).svg"),
          name: "胡雯",
          class: "软件工程1901",
          id: "201903140101",
          laboraid: "F608",
        },
        {
          logo:  require("../../assets/image/userLogo/宫崎骏 (3).svg"),
          name: "学生3",
          class: "软件工程1901",
          id: "201903140102",
          laboraid: "F609",
        },
        {
          logo:  require("../../assets/image/userLogo/宫崎骏 (6).svg"),
          name: "学生4",
          class: "软件工程1901",
          id: "201903140103",
          laboraid: "F608",
        },
      ],
      
      userNum: 50,
      labId: ["F609","F608"],
      listHead: ["头像", "姓名", "专业班级", "学号", "所属实验室"],
    };
  },
  
  methods:{
    getSearchVal(value){
      this.showUsers = value;
    },

  },

  created(){
    this.showUsers = this.users;
  },

};
</script>

<style scoped>

</style>