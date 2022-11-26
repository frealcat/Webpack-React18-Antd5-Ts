import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfigProvider, Button, theme } from 'antd'
import Home from '@/pages/Home'
import './app.less'


const App: React.FC = () => {

  return (
    <Suspense fallback={null}>
      {/* 全局主题 */}
      <ConfigProvider theme={{
        token: {
          // colorPrimary: '#00b96b',
        },
        algorithm: theme.compactAlgorithm
      }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>

      </ConfigProvider>
    </Suspense>
  )
}
export default App