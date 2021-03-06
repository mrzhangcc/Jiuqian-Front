import Vue from 'vue'
import Router from 'vue-router'
import Settings from '@/views/Settings'
import SettingCard from '@/views/settings/SettingCard'
import Home from '@/views/Home'
import Apps from '@/views/Apps'
import App from '@/views/App'
import Order from '@/views/Order'
import OrderIndexRead from '@/views/order/index/Read'
import OrderIndexAdd from '@/views/order/index/Add'
import OrderEdit from '@/views/order/Edit'
import OrderAdd from '@/views/order/Add'
import OrderRemove from '@/views/order/Remove'
import Myself from '@/views/Myself'
import Funcs from '@/views/Funcs'
import FuncLocation from '@/views/func/FuncLocation'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      name: 'index',
      path: '/',
      redirect: '/home'
    },
    {
      name: 'Home',
      path: '/home',
      component: Home
    },
    {
      name: 'Apps',
      path: '/apps',
      component: Apps
    },
    {
      name: 'App',
      path: '/app',
      component: App
    },
    {
      name: 'Order',
      path: '/order',
      component: Order,
      children: [
        {
          name: 'OrderIndexRead',
          path: 'order/index/read',
          component: OrderIndexRead
        },
        {
          name: 'OrderIndexAdd',
          path: 'order/index/add',
          component: OrderIndexAdd
        },
        {
          name: 'OrderAdd',
          path: 'order/add',
          component: OrderAdd,
          meta: {
            showNavbars: false,
            showHeaderbar: false,
            showFuncbars: true
          }
        },
        {
          name: 'OrderEdit',
          path: 'order/edit',
          component: OrderEdit,
          meta: {
            showNavbars: false,
            showHeaderbar: false,
            showFuncbars: true
          }
        },
        {
          name: 'OrderRemove',
          path: 'order/remove',
          component: OrderRemove
        }
      ]
    },
    {
      name: 'Myself',
      path: '/myself',
      component: Myself
    },
    {
      name: 'Settings',
      path: '/settings',
      component: Settings,
      children: [
        {
          name: 'SettingCard',
          path: 'card/:id',
          component: SettingCard,
          props: true
        }
      ]
    },
    {
      name: 'Funcs',
      path: '/funcs',
      component: Funcs,
      children: [
        {
          name: 'FuncLocation',
          path: 'location/:action',
          component: FuncLocation,
          props: true
        }
      ],
      props: true
    }
  ]
})
