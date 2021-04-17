<template>
  <div class="acco-lab">
    <acco-header :moneyTotal="moneyTotal" :labName="labName" class="acco-header"/>
    <account-list
      :listHead="listHead"
      :items="backData"
      class="account-list"
    ></account-list> 
  </div>
</template>

<script>
import AccountList from "../../../components/content/List.vue";
import AccoHeader from "./AccoHeader.vue";
import {getAccount} from '../../../network/reqData';

export default {
  components: {
    AccountList,
    AccoHeader,
  },
  data() {
    return {
      listHead: ["事件序列", "事件", "金额", "时间流水", "剩余经费"],
      accouts: null,
      backData:null,
      moneyTotal: {
        inMoney: "",
        outMoney: "",
        allMoney: "",
      },
    };
  },
  computed: {
    labName: function () {
      let labId = this.$route.params.labId;
      if(this.accouts) { 
        for(let item of this.accouts) {
          if(item.labId === labId) this.backData = item.tabList
        }
        this.upTotal();
      }
      return  labId
    },
  },
  methods:{
    //总收入，总支出，当前经费数据更新
    upTotal() {
      let inM = 0,
      outM = 0,
      allM = 0;
       for (let items of this.backData) {
         if (items.money <= 0)
           outM += items.money;
         else inM += items.money;
       }
       allM = inM - outM;
       this.moneyTotal.inMoney = inM.toFixed(2) + "元";
       this.moneyTotal.outMoney = (outM *(-1)).toFixed(2) + "元";
       this.moneyTotal.allMoney = allM.toFixed(2) + "元";
    },
  
  },
  mounted() {
    getAccount().then(res => {
      console.log(res)
      this.accouts = res;
    })
  }
};
</script>

<style scoped>
.acco-lab {
    padding-top: 20px;
}
.account-list {
  margin-top: 70px;
}

</style>


