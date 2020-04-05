import Vue from 'vue';
import Router from 'vue-router';
import Indicadores from '@/components/Indicadores'
import Ventas from '@/components/Ventas'
import Compras from '@/components/Compras'
import Inventarios from '@/components/Inventarios'
import Finanzas from '@/components/Finanzas'
import Personas from '@/components/Personas'
import Planificacion from '@/components/Planificacion'
import Informes from '@/components/Informes'


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/indicadores',
      name: 'Indicadores',
      component: Indicadores,
      props: { page: 1 },
      alias: '/'
    },
    {
      path: '/ventas',
      name: 'Ventas',
      props: { page: 3 },
      component: Ventas
    },
    {
      path: '/compras',
      name: 'Compras',
      props: { page: 3 },
      component: Compras
    },
    {
      path: '/inventarios',
      name: 'Inventarios',
      props: { page: 4 },
      component: Inventarios
    },
    {
      path: '/finanzas',
      name: 'Finanzas',
      props: { page: 5 },
      component: Finanzas
    },
    {
      path: '/personas',
      name: 'Personas',
      props: { page: 6 },
      component: Personas
    },
    {
      path: '/planificacion',
      name: 'Planificacion',
      props: { page: 7 },
      component: Planificacion
    },
    {
      path: '/informes',
      name: 'Informes',
      props: { page: 8 },
      component: Informes
    }
  ]
})