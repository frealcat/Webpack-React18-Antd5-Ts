import React, { Suspense } from 'react'
import {useRoutes } from "react-router-dom";
import { ConfigProvider, Button, theme } from 'antd'
import BaseLayout from './components/Layout';
import Header from '@/components/BaseHeader'
import router from '@/router';
import BondenInArea from '@/pages/research/bondedInArea';
import Home from '@/pages/home'
import './app.less'


const App: React.FC = () => {

  return (
    <Suspense fallback={null}>
      {/* 全局主题 */}
      <ConfigProvider theme={{
        token: {
          colorPrimary: '#48D52C',
        },
      }}>
        <BaseLayout HeaderContent={<Header />} FooterContent={<h2>This is Footer!</h2>}>
          {useRoutes(router)}
        </BaseLayout>

      </ConfigProvider>
    </Suspense>
  )
}
export default App