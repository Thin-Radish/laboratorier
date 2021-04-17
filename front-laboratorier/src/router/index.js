import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () => import('views/home/Home')
const Account = () => import('views/account/Account')
const HygieneTab = () => import('views/hygienetab/HygieneTab')
const Materials = () => import('views/materials/Materials')
const Seat = () => import('views/seat/Seat')
const UserInfo = () => import('views/userinfo/UserInfo')
const TabList = () => import('views/hygienetab/childComps/TabList')

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
    component: Account
  },
  {
    path: '/hygienetab',
    component: HygieneTab,
    children: [
      {
        path: 'hygieneF608',
        component: TabList
      },
      {
        path: 'hygieneF609',
        component: TabList
      },
      {
        path: '',
        redirect: 'hygieneF608'
      }
    ]
  },
  {
    path: '/materials',
    component:Materials
  },
  {
    path: '/seat',
    component:Seat
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
