/* 
    路由配置
*/
import React, { Suspense, lazy, useEffect } from 'react'
import menus from './menu'
const Home = lazy(() => import(
  /* webpackChunkName: "PreloadDemo" */
  /*webpackPreload: true*/
  '@/pages/home'
))

export type menuConfig = {
  path: string,
  name?: string,
  id: string
  children?: menuConfig[] | null
}

type RouteProp = {
  path: string,
  element: JSX.Element,
  children?: RouteProp[]
}

function LazyWrapper(path: string) {
  const Component = lazy(() => import(`../pages${path}`))
  return (
    <Suspense fallback={<div>loading</div>}>
      <Component />
    </Suspense>
  );
}

// 收集所有的叶子节点，生成路由信息
function genRouter(menus: menuConfig[], router: RouteProp[]) {
  menus.forEach((menuItem: menuConfig) => {
    if (!menuItem.children) {
      router.unshift({
        path: menuItem.path,
        element: LazyWrapper(menuItem.path)
      })
    } else {
      genRouter(menuItem.children, router)
    }
  })
}
const router: RouteProp[] = [
  {
    path: '*',
    element: <Home />
  },
];
genRouter(menus, router)


export default router