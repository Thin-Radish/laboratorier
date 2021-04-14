<template>
  <div class="head-nav">
    <div class="logo"><img src="../../../public/logo.png" ></div>
    <div class="title"><p>软工实验室</p><p>wuhuqifei</p></div>
    <div class="user-name">谢旗峰</div>
    <div class="user-logo"><img src="../../assets/image/userLogo/二次元宠物-01.svg" alt=""></div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style  scoped>
.head-nav {
  width: 100%;
  /* height: 70px; */
  height: 55px;
  overflow: hidden;
  border-bottom: 2px solid rgb(64, 158, 255);
}


.logo {
  width: 50px;
  height: 60px;
  margin-left: 50px;
  float: left;
}

.logo img {
  position: absolute;
  width: 40px;
  /* height: 50px; */
  /* top: 10px; */
  left: 50px; 
  top: 5px;

}


.title {
  float: left;
  margin-top: 5px;
  margin-left: 5px;
  /* margin: 12px 20px; */
  color: rgb(64, 158, 255);
}



.title p:first-child {
  /* font-size: 25px; */
  font-size: 20px;
  font-weight: 800;
}

.title p:last-child {
  font-size: 12px;
  text-align: center;
}

.user-logo {
  float: right;
  /* margin-top: 20px; */
  margin-top: 10px;
  margin-right: 10px;

  width: 32px;
  height: 32px;

  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  overflow: hidden;
  /* box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1) ; */
  /* background: rgba(0, 0, 0, 0.1); */
  background: rgba(29, 115, 196, 0.1);
   
  display: flex;
  justify-content: center;
  align-items: center;  
}
.user-logo img{
  width: 30px;
  height: 32px;
}


.user-name {
  float: right;
  width: 80px;
  /* margin-top: 8px; */
  margin-top: 15px;
  margin-right: 15px;
  /* height: 60px; */
  font-size: 18px;
  /* line-height: 60px; */
  /* border: 1px solid rgb(77, 20, 168); */
  color: #636e72;
}



</style>