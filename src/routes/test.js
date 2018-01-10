
import React from 'react';
import { connect } from 'dva';
import { Layout, Menu, Icon, Tabs } from 'antd';
import NumberInput from '../components/NumberInput';
import InputExample from '../components/InputExample';
import styles from './IndexPage.less';

const { Header, Sider, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;


class IndexPage extends React.Component {


  componentDidMount() {
    console.log(12222)
    this.props.dispatch({
      type: 'abouta/update',
      payload: {
        time: +new Date()
      }
    });
  }

  render() {

    return <div />;
  }
}

// IndexPage.propTypes = {};

function mapStateToPorps({ abouta }) {
  return { abouta };
}

export default connect( mapStateToPorps )( IndexPage );
