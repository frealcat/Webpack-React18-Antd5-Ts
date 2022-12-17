import React, { Children, useCallback, useEffect, useState } from "react";
import { menuConfig } from '@/router/index'
import CustomMenu, { menuItem } from "@/components/CustomMenu";
import menus from '@/router/menu'
import classNames from "classnames";
import styles from './index.module.less'
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
    const [menuItems, setMenuItems] = useState<menuItem[]>([]);
    const location = useLocation()
    useEffect(() => {
        const newMenuItems = getMenus(menus)
        setMenuItems(newMenuItems)
    }, [menus])

    useEffect(() => {
        console.log(location)
    })

    const navigate = useNavigate()
    const getMenus = (menus: menuConfig[]) => {
        const newMenus = menus.map(item => {
            const newItem: menuItem = {
                label: item.name,
                key: item.id,
                path: item.path
            }
            if (item.children && item.children.length > 0) {
                newItem.children = item.children.map((child) => ({
                    key: child.id,
                    label: (
                        <Link to={child.path}>{child.name}</Link>
                    )
                }))
            }
            return newItem
        })
        return newMenus
    }

    return (
        <div className={classNames(styles['container'])}>
            <div className={classNames(styles['logo'])}/>
            {/* <Menu className={classNames(styles['menu'])} mode="horizontal" items={menuItems} /> */}
            <CustomMenu items={menuItems} />
        </div>
    )
}

export default Header