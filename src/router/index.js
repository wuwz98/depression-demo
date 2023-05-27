import Vue from 'vue';
import Router from 'vue-router'
import TestContent from '../components/TestContent'
import BasicLayout from '../layout/index'
import DiseaseList from '../views/NodeManagement/Diseases'
import SymptomList from '../views/NodeManagement/Symptoms'
import TreatmentList from '../views/NodeManagement/Treatments'
import MedicationList from '../views/NodeManagement/Medications'
import NotFound from '../components/NotFound'

Vue.use(Router);

export default new Router({
  mode:'history',

  routes: [
    {
      // 路由跳转路径
      path: '/content',
      // 路由名称
      name: 'TestContent',
      // 路由跳转组件
      component: TestContent
    },
    {
      path: '/',
      name: 'Main',
      component: BasicLayout,
      children: [
        {
          path: '/disease/list',
          name: 'DiseaseList',
          component: DiseaseList
        },
        {
          path: '/symptom/list',
          name: 'SymptomList',
          component: SymptomList
        },
        {
          path: '/medication/list',
          name: 'MedicationList',
          component: MedicationList
        },
        {
          path: '/treatment/list',
          name: 'TreatmentList',
          component: TreatmentList
        }
      ]
    },
    {
      path:'*',
      component: NotFound
    }
  ]
})
