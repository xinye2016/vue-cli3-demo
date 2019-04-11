import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import store from '@/store' // 引入状态管理
import NProgress from 'nprogress' // 引入进度条组件
import 'nprogress/nprogress.css'

Vue.use(Router)

const router = new Router({
  routes: routes
})

// 判断是否存在token
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.path !== '/login' && !store.state.token) {
    next('/login') // 跳转登录
    NProgress.done() // 结束Progress
  }
  next()
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})

export default router
