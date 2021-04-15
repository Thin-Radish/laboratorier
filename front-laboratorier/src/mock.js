const Mock = require('mockjs')

const Random = Mock.Random

const userInfo = function () {
  let userList = []
  for (let i = 0; i < 30; i++) {
    let template = Mock.mock({
      logo: Random.image(30),
      name: Random.cname(),
      'class|1': ["软件工程1901", "软件工程1902", "网络工程1901", "网络工程1902"],
      id: Random.string("Number", 12),
      'laboraid|1': ["f608", "f609"],
      seatId: Random.string("Number", 2),

    })
    userList.push(template)
  }

  return userList
}

const account = function(){
  let tabList = [];
  for(let i=0; i<30; i++){
    let template = Mock.mock({
      id:Random.increment(),
      event:Random.ctitle(5,9),
      amount:Random.float(-50,150,0,2),
      date:'15'+Random.string("Number", 8),
      remainSum: Random.float(-100,1000,0,2),
      inTotal: Random.float(0,1000,0,2),
      outTotal: Random.float(0,500,0,2),
      nowTotal: Random.float(0,500,0,2),
    })
    tabList.push(template)
  }
  return tabList
}

const hygiene = function(){
  let tabList = [];
  for(let i=0; i<18; i++){
    let template = Mock.mock({
      weakId:Random.increment(1),
      mon:Random.cname(),
      wed:Random.cname(),
      frid:Random.cname(),
    })
    tabList.push(template)
  }
  return tabList
}


const materials = function(){
  let tabList = [];
  for(let i=0; i<20; i++){
    let template = Mock.mock({ 
      'materId|1':["显示器","键盘","椅子","扫把","拖机"],
      materCount:Random.integer(2,5),
      freeCount:Random.integer(1,2),
      'laboraid|1': ["f608", "f609"],
      Note:Random.ctitle(10),
    })
    tabList.push(template)
  }
  return tabList
}


function padLeftZero(str) {
  return ("00" + str).substr(str.length);
}


function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  }

  let o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds()
  };

  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + "";
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
    }
  }

  return fmt;
}


let da = Mock.mock({
  date:'15'+Random.string("Number", 11),
})


//时间戳转化
date = new Date(parseInt(da.date))
date = formatDate(date,"yyyy/MM/dd")
// console.log(date);


Mock.mock('http://127.0.0.1:8080/userinfo', userInfo) ;
Mock.mock('http://127.0.0.1:8080/account',account);
Mock.mock('http://127.0.0.1:8080/hygiene',hygiene);
Mock.mock('http://127.0.0.1:8080/materials',materials);


