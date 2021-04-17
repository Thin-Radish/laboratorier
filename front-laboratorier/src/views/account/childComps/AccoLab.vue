<template>
  <div class="acco-lab">
    <acco-header :moneyTotal="moneyTotal" :labName="labName"></acco-header>
    <account-list
      :listHead="listHead"
      :items="accout"
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
      accout: null,
      labName:null,

      moneyTotal: {
        inMoney: "",
        outMoney: "",
        allMoney: "",
      },
    };
  },
  computed: {
    labId: function () {
    let labId = this.$route.params.labId;
    this.accout = res;
    this.labName = this.$route.params.labId;
    let inM = 0,
    outM = 0,
    allM = 0;
    for (let items of this.accout) {
    if (items.money <= 0)
      outM += items.money;
    else inM += items.money;
    }
    allM = inM - outM;
    this.moneyTotal.inMoney = inM.toFixed(2) + "元";
    this.moneyTotal.outMoney = (outM *(-1)).toFixed(2) + "元";
    this.moneyTotal.allMoney = allM.toFixed(2) + "元";
    return  labId
    },
  },
  created() {
    this.labName = this.$route.params.labId;
  },
  mounted() {
    getAccount().then(res => {
      this.accout = res;
    })
  }
};
</script>

<style scoped>
.acco-lab {
    padding-top: 20px;
}
</style>


