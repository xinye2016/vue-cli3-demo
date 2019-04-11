/**
    *@parma {String} name 文件夹名称
    *@parma {String} component 视图组件名称
    */
const getComponent = (name, component) => () => import(`@/views/${name}/${component}.vue`)

const routes = [
  {
    path: '/',
    name: 'home',
    component: getComponent('home', 'index')
  },
  {
    path: '/about',
    name: 'about',
    component: getComponent('about', 'index')
  }
]

export default routes
