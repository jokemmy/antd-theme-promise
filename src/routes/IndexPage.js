
import React from 'react';
import { connect } from 'dva';
import { Layout, Menu, Icon, Tabs } from 'antd';
import NumberInput from '../components/NumberInput';
import InputExample from '../components/InputExample';
import Test from './test';
import styles from './IndexPage.less';

const { Header, Sider, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;


class IndexPage extends React.Component {

  state = {
    collapsed: false,
    activeKey: '1'
  };

  handleChange = ( activeKey ) => {
    this.setState({ activeKey });
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  content = () => {
    return (
      <Content style={{ minHeight: 280 }}>
        <NumberInput />
        <InputExample />
      </Content>
    );
  };

  render() {

    const ContentComponent = this.content;
    const content = (
      <div>
        <ContentComponent />
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
      </div>
    );

    const panes = [
      { title: 'Tab 1', content, key: '1' },
      { title: 'Tab 2', content, key: '2' },
      { title: 'Tab 2', content, key: '23' },
      { title: 'Tab 2', content, key: '24' },
      { title: 'Tab 2', content, key: '25' },
      { title: 'Tab 2', content, key: '26' },
      { title: 'Tab 2', content, key: '27' },
      { title: 'Tab 2', content, key: '28' },
      { title: 'Tab 2', content, key: '29' },
      { title: 'Tab 2', content, key: '20' },
      { title: 'Tab 2', content, key: '21' },
      { title: 'Tab 2', content, key: '22' }
    ];

    return (
      <Layout className="ant-layout-root">
        <Header className="ant-layout-root-header" style={{ position: 'fixed', zIndex: 999, width: '100%' }}>
        </Header>
        <Layout className="ant-layout-root-sider">
          <Sider
            collapsible
            trigger={null}
            breakpoint="lg"
            collapsed={this.state.collapsed}
            className="ant-layout-sider-menu"
            onCollapse={( collapsed, type ) => {
              if ( type === 'responsive' ) {
                this.toggle();
              }
            }}>
            <div className="logo" />
            <Menu theme="sider" mode="inline" defaultSelectedKeys={['01']}>
              <Menu.Item key="01">
                <Icon type="user" />
                <span className="nav-text">收费管理</span>
              </Menu.Item>
              <Menu.Item key="02">
                <Icon type="video-camera" />
                <span className="nav-text">人事管理</span>
              </Menu.Item>
              <Menu.Item key="03">
                <Icon type="upload" />
                <span className="nav-text">打印报表</span>
              </Menu.Item>
              <SubMenu key="sub1" title={<span><Icon type="mail" /><span className="nav-text">Navigation One</span></span>}>
                <MenuItemGroup key="g1" title="Item 1">
                  <Menu.Item disabled key="1">Option 1</Menu.Item>
                  <Menu.Item disabled key="2">Option 2</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup key="g2" title="Item 2">
                  <Menu.Item key="3">Option 3</Menu.Item>
                  <Menu.Item key="4">Option 4</Menu.Item>
                </MenuItemGroup>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="appstore" /><span className="nav-text">Navigation Two</span></span>}>
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                  <Menu.Item key="7">Option 7</Menu.Item>
                  <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
              </SubMenu>
              <SubMenu key="sub4" title={<span><Icon type="setting" /><span className="nav-text">Navigation Three</span></span>}>
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout className="ant-layout-sider-content">
            <Header style={{ background: '#fefefe', padding: 0 }}>
              <Icon
                className="trigger"
                onClick={this.toggle}
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
            </Header>
            <Layout className="ant-layout-sider-tabs">
              <Tabs
                hideAdd
                onChange={this.handleChange}
                activeKey={this.state.activeKey}
                className="ant-tabs-page"
                type="editable-card"
                onEdit={this.onEdit}>
                {panes.map( pane => <TabPane tab={pane.title} key={pane.key}>{pane.content}</TabPane> )}
              </Tabs>
            </Layout>
            <Footer className="ant-layout-sider-footer">footer</Footer>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

// IndexPage.propTypes = {};

export default connect()( IndexPage );
