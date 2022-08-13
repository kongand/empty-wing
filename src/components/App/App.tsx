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
  appStyles,
  contentStyles,
  headerStyles,
  logoStyles,
  triggerStyles,
} from './styles';

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [width, setWidth] = useState<string>();
  const [collapsedWidth, setCollapsedWidth] = useState<number>();

  return (
    <Layout css={appStyles}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        breakpoint="md"
        width={width}
        collapsedWidth={collapsedWidth}
        onBreakpoint={(broken) => {
          if (broken) {
            setWidth('calc(100% - 4rem)');
            setCollapsedWidth(0);
          } else {
            setWidth(undefined);
            setCollapsedWidth(undefined);
          }
        }}
      >
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
