import { lazy } from 'react'

const HomeRoutes = [
  {
    path: '/',
    component: lazy(() => import('../../views/pages/Home'))
  }
]

export default HomeRoutes
