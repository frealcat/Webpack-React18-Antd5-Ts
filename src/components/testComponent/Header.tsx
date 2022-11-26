import React from "react";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const Header: React.FC = () => {
    
    const items1: MenuProps['items'] = new Array(10).fill(Math.random()).map((key: number, index: number) => ({
        key: key * key + Math.random(),
        label: `nav ${index + 1}`,
      }));

    return (
        <>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" items={items1} />
        </>
    )
}

export default Header