import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GetList from '@/components/Tasks/Index'
import PostList from '@/components/Tasks/CreateTask'
import EditList from '@/components/Tasks/EditTask'
import ViewTask from '@/components/ViewTask/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/tasks',
      name: 'getlist',
      component: GetList
    },
    {
      path: '/task/add',
      name: 'PostList',
      component: PostList
    },
    {
      path: '/task/edit/:id',
      name: 'EditList',
      component: EditList
    },
    {
      path: '/task/:id',
      name: 'ViewTask',
      component: ViewTask
    }
  ]
})
