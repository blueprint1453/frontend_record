

const Home = () => import('../views/home/index.vue')
const About = () => import('../views/about/index.vue')
const List = () => import('../views/list/index.vue')
const File = () => import('../components/Upload.vue')

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
]

export default routes