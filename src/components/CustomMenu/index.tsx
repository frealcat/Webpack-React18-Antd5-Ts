import classNames from "classnames";
import React, { Children, useEffect, useState } from "react";
import { Divider, MenuProps } from 'antd';
import { Dropdown } from 'antd';
import { Link, useNavigate } from "react-router-dom";
import styles from './index.module.less'


const CustomMenu = (props: IProps) => {
    const { items = [] } = props
    const navigate = useNavigate()

    return (
        <ul className={classNames(styles['container'], props.className)} style={props.style}>
            {
                items.map((item: menuItem) => {
                    return item.children ? <Dropdown menu={{ items: item.children }} placement="bottom">
                        <li>{item.label}</li>
                    </Dropdown> : <li onClick={() => navigate(item.path)}>{item.label}{/* <Link to={item.path}>{item.label}</Link> */}</li>
                }).reverse()
            }
        </ul>
    )
}

type IProps = {
    items?: menuItem[]
    className?: string,
    style?: any
}

export type menuItem = {
    label?: string,
    key?: string | number,
    path: string,
    children?: MenuProps['items'],
    [key: string]: any
}

export default CustomMenu