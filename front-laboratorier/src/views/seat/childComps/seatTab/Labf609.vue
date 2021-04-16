<template>
  <div class="lab-609" :getLoca="userName()">
    <div class="col">
      <div class="row">
        <div>
          <site :loca="siteLoca[1]" />
          <site :loca="siteLoca[2]" />
          <site :loca="siteLoca[3]" />
          <site :loca="siteLoca[3]" />
          <site :loca="siteLoca[2]" />
          <site :loca="siteLoca[1]" />
        </div>
      </div>
      <div class="row">
        <div>
          <site :loca="siteLoca[1]" />
          <site :loca="siteLoca[2]" />
          <site :loca="siteLoca[3]" />
          <site :loca="siteLoca[3]" />
          <site :loca="siteLoca[2]" />
          <site :loca="siteLoca[1]" />
        </div>
      </div>
      <div class="row end">
        <div>
          <site :loca="siteLoca[1]" />
          <site :loca="siteLoca[2]" />
          <site :loca="siteLoca[3]" />
        </div>
      </div>
    </div>
    <div class="col">
      <div class="row">
        <div>
          <site :loca="siteLoca[1]" />
          <site :loca="siteLoca[2]" />
          <site :loca="siteLoca[3]" />
          <site :loca="siteLoca[3]" />
          <site :loca="siteLoca[2]" />
          <site :loca="siteLoca[1]" />
        </div>
      </div>
      <div class="row">
        <div>
          <site :loca="siteLoca[1]" />
          <site :loca="siteLoca[2]" />
          <site :loca="siteLoca[3]" />
          <site :loca="siteLoca[3]" />
          <site :loca="siteLoca[2]" />
          <site :loca="siteLoca[1]" />
        </div>
      </div>
      <div class="row end">
        <div>
          <site :loca="siteLoca[1]" />
          <site :loca="siteLoca[2]" />
          <site :loca="siteLoca[3]" />
        </div>
      </div>
    </div>
    <div class="style window1">窗户</div>
    <div class="style window2">窗户</div>
    <div class="style font-door">前门</div>
    <div class="style end-door">后门</div>
    <div class="style-air">空调</div>
    <div class="style-water">饮水机</div>
    <div class="style-road"><div>过</div><div>道</div></div>
  </div>
</template>

<script>
import Site from "./Site.vue";

export default {
  components: {
    Site,
  },

  data() {
    return {
      user: [
        {
          name: "谢旗峰",
          laboraid: "f609",
          seatId: 2,
        },
        {
          name: "胡雯",
          laboraid: "f609",
          seatId: 3,
        },
        {
          name: "邹昀",
          laboraid: "f609",
          seatId: 1,
        },
        {
          name: "邹昀",
          laboraid: "f608",
          seatId: 4,
        },
      ],
      siteLoca: [],
    };
  },
  computed: {},

  methods: {
    userName() {
      for (let index = 1; index < this.user.length; index++) {
        for (let i in this.user) {
          if (
            this.user[i].laboraid === "f609" &&this.user[i].seatId === index) {
              this.siteLoca[index] = this.user[i].name;
              break;
          }
        }
      }
    },
  },


};
</script>

<style scoped>
.lab-609 {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;

  top: 25px;
}

.col {
  width: 35%;
  height: 95%;
  flex: 1;

  margin: 10px 30px;

  display: flex;
  flex-direction: column;
}

.row {
  flex: 1;

  width: 100%;
  height: 30%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.row>div{
  width: 90%;
}

.end{
  transform: translateY(-25px);
}

.style{
  height: 100px;
  width: 11px;
  background: #e1f0ff;
  line-height: 50px;
  font-size: 10px;
  position: absolute;
}

.window1{  
  top: 18%;
}

.window2{ 
  top: 60%;
}

.font-door{
  right: 10px;
}

.end-door{
  right: 10px;
  bottom: 80px;
}

.style-air{
  height: 11px;
  width: 100px;
  background: #e1f0ff;
  text-indent: 25px;
  letter-spacing:25px;
  font-size: 10px;
  position: absolute;

  left: 5%;
}

.style-water{
  height: 11px;
  width: 100px;
  background: #e1f0ff;
  text-indent: 25px;
  letter-spacing:12px;
  font-size: 10px;
  position: absolute;

  right: 20%;
}

.style-road{
  width: 50px;
  height: 300px;

  line-height: 150px;
  text-align: center;
  font-size: 15px;
  color:rgb(58, 57, 56);

  border-left: 1px solid rgb(178, 211, 230);
  border-right: 1px solid rgb(178, 211, 230);

  position: absolute;
  left: 47%;
  top: 20%;
}

</style>