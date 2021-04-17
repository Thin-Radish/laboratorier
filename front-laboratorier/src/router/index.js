import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () => import('views/home/Home')
const Account = () => import('views/account/Account')
const HygieneTab = () => import('views/hygienetab/HygieneTab')
const Materials = () => import('views/materials/Materials')
const Seat = () => import('views/seat/Seat')
const UserInfo = () => import('views/userinfo/UserInfo')


const AccoLab = () => import('views/account/childComps/AccoLab')

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/account',
    component: Account,
    children: [
      {
        path: ":labId",
        component: AccoLab
      },
      {
        path: "",
        redirect: 'F608'
      }
    ]
  },
  {
    path: '/hygienetab',
    component: HygieneTab
  },
  {
    path: '/materials',
    component:Materials
  },
  {
    path: '/seat',
    component:Seat,
  },
  {
    path: '/userinfo',
    component:UserInfo
  },
]

const router = new VueRouter({
  routes,
  mode:"history"
})

export default router
