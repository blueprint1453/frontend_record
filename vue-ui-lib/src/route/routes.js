
const Home = () => import('../views/home/index.vue')
const About = () => import('../views/about/index.vue')
const List = () => import('../views/list/index.vue')
const File = () => import('../components/Upload.vue')
const Layout = () => import('../views/Layout/index.vue')
const Message = () => import('../views/message/index.vue')
const Switch = () => import('../views/switch/index.vue')

const routes = [
  {
    component: Home,
    path: '/'
  },
  {
    component: List,
    path: '/list'
  },
  {
    component: About,
    path: '/about'
  },
  {
    component: File,
    path: '/file'
  },
  {
    component: Layout,
    path: '/layout'
  },
  {
    component: Message,
    path: '/message'
  },
  {
    component: Switch,
    path: '/switch'
  },
]

export default routes