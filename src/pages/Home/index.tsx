import React, { lazy } from "react";
import BaseLayout from '@/components/Layout'
import Header from '@/components/testComponent/Header'
import Center from '@/components/testComponent/Center'

/* 
   **preload**是告诉浏览器页面必定需要的资源,浏览器一定会加载这些资源。
   **prefetch**是告诉浏览器页面可能需要的资源,浏览器不一定会加载这些资源,会在空闲时加载。
*/
// prefetch
const PreFetchDemo = lazy(() => import(
    /* webpackChunkName: "PreFetchDemo" */
    /*webpackPrefetch: true*/
    '@/components/testComponent/PreFetchDemo'
))
// preload
const PreloadDemo = lazy(() => import(
    /* webpackChunkName: "PreloadDemo" */
    /*webpackPreload: true*/
    '@/components/testComponent/PreloadDemo'
))


const Home: React.FC = () => {
    return (
        <BaseLayout HeaderContent={<Header />} CenterContent={<Center />} FooterContent={
            <h3>
                Footer is here!
            </h3>
        } />
    )
}

export default Home