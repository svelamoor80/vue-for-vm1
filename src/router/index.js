import Vue from 'vue'
import Router from 'vue-router'
import AddPositionTableContainer from '@/components/AddPositionTableRender'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Container',
    component: AddPositionTableContainer
  }]
})
