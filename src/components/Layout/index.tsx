import React from "react";
import { Layout } from 'antd';
import classnames from 'classnames'
import styles from './index.module.less'
console.log(styles);


const { Header, Content, Footer } = Layout;
const BaseLayout = (props: IProps) => {

    return (
        <Layout className={classnames(styles['layout'])}>
            {
                props.HeaderContent ? <Header className="header">{props.HeaderContent}
                </Header> : null
            }
            <Content className={classnames(styles['layout-center'])}>
                {props.CenterContent}
            </Content>

            {
                props.FooterContent ? <Footer className="header">{props.FooterContent}</Footer> : null
            }
        </Layout>
    )
}

interface IProps {
    HeaderContent?: React.ReactNode
    CenterContent: React.ReactNode
    FooterContent?: React.ReactNode
    children?: React.ReactNode
}
export default BaseLayout