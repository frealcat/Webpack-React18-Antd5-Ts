import React, { useEffect } from "react";
import { Layout } from 'antd';
import classnames from 'classnames'
import styles from './index.module.less'


const { Content, Footer } = Layout;
const BaseLayout = (props: IProps) => {

    return (
        <Layout className={classnames(styles['layout'])}>
            {
                props.HeaderContent ? <React.Fragment>
                    {props.HeaderContent}
                </React.Fragment> : null
            }
            <Content className={classnames(styles['layout-center'])}>
                {props.children}
            </Content>
            {
                props.FooterContent ? <Footer className="header">{props.FooterContent}</Footer> : null
            }
        </Layout>
    )
}

interface IProps {
    HeaderContent?: React.ReactNode | null
    FooterContent?: React.ReactNode | null
    children?: React.ReactNode | React.ReactElement
}
export default BaseLayout