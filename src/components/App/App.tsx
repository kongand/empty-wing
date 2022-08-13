/** @jsxImportSource @emotion/react */
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import {
  contentStyles,
  headerStyles,
  logoStyles,
  triggerStyles,
} from './styles';

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div css={logoStyles} />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header css={headerStyles}>
          {collapsed ? (
            <MenuUnfoldOutlined
              css={triggerStyles}
              onClick={() => setCollapsed(!collapsed)}
            />
          ) : (
            <MenuFoldOutlined
              css={triggerStyles}
              onClick={() => setCollapsed(!collapsed)}
            />
          )}
        </Header>
        <Content css={contentStyles}>Content</Content>
      </Layout>
    </Layout>
  );
};

export default App;
