<template>
  <div class="materi-lab">
    <materi-list
      :listHead="listHead"
      :items="backData"
      class="materi-list"
      :labId = "labName"
    />
  </div>
</template>

<script>
import MateriList from "../../../components/content/List.vue";
import {getMaterials} from '../../../network/reqData';

export default {
  components: {
    MateriList
  },
  data() {
    return {
      listHead: ["设备","总计","已使用","未使用"],
      equipmentList:["主机(台)","显示屏(台)","键盘(个)","鼠标(个)","插座(个)","钥匙(支)","清洁工具(套)"],
      materis: null,
      backData:null,
      allMateri:[],
      F609Materi:[],
      F607Materi:[],
      F608Materi:[]
    };
  },
  computed:{
    labName() {
      let labId = this.$route.params.labId;
      if(labId === "All") this.backData = this.allMateri
      else if(labId === 'F607') this.backData = this.F607Materi
      else if(labId === 'F608') this.backData = this.F608Materi
      else if(labId === 'F609') this.backData = this.F609Materi
 
      return labId
    }
  },
  methods:{
    install() {
      this.allMateri = this.makeMateri();
      this.F608Materi = this.makeMateri();
      this.F609Materi = this.makeMateri();
      this.F607Materi = this.makeMateri();

      for(let item of this.materis) {
       this.materisEach(this.allMateri, item)
        if(item.labId === 'F608') {
          this.materisEach(this.F608Materi, item)
        }else if(item.labId === 'F609'){
          this.materisEach(this.F609Materi, item)
        }else if(item.labId === 'F607'){
          this.materisEach(this.F607Materi, item)
        }
      }
    },
    changeKey(value){
      if(value === "host")
      {
        return "主机(台)"
      }else if(value === "screen"){
        return "显示屏(台)"
      }else if(value === "keyboard"){
        return "键盘(个)"
      }else if(value === "mouse"){
        return "鼠标(个)"
      }else if(value === "socket"){
        return "插座(个)"
      }else if(value === "key"){
        return "钥匙(支)"
      }else if(value === "cleaningTool"){
        return "清洁工具(套)"
      }
    },
    makeMateri(){
      let Materi = [
       {equipment:"主机(台)",all:0,using:0,unuse:0},
        {equipment:"显示屏(台)",all:0,using:0,unuse:0},
        {equipment:"键盘(个)",all:0,using:0,unuse:0},
        {equipment:"鼠标(个)",all:0,using:0,unuse:0},
        {equipment:"插座(个)",all:0,using:0,unuse:0},
        {equipment:"钥匙(支)",all:0,using:0,unuse:0},
        {equipment:"清洁工具(套)",all:0,using:0,unuse:0}
      ]
      return  Materi;
    },
    materisEach(data,item) {
      data.forEach((element)=> {
            if(element['equipment'] === this.changeKey(item.equipment)){
              element['all'] += item.all;
              element['using'] += item.using;
              element['unuse'] = element['all'] - element['using']
            }
          })
    }
 },
  mounted() {
    getMaterials().then(res => {
      this.materis = res;
      this.$store.commit("commitMaterials",this.materis);
      this.install()
    })
  }
}
</script>

<style scoped>
.materi-lab {
    padding-top: 20px;
    line-height: 40px;
}
.materi-list {
  margin-top: 0px;
}
</style>


