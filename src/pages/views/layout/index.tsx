import React, { PureComponent, ReactNode, ReactElement } from 'react';
import './config/index.css';
import '../config/index';
import './index.less';
import { TabBar } from 'antd-mobile';
import { history } from 'umi';
interface props {}
type obj = {
  path: string;
  icon: string;
  selectIcon: string;
  title: string;
};
interface state {
  selectedTab: string;
  tabList: Array<obj>;
}
export default class App extends PureComponent<props, state> {
  constructor(props: props) {
    super(props);
    this.state = {
      selectedTab: '首页',
      tabList: [
        {
          path: '',
          icon:
            'https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg',
          selectIcon:
            'https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg',
          title: '首页',
        },
        {
          path: '',
          icon:
            'https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg',
          selectIcon:
            'https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg',
          title: '我的',
        },
      ],
    };
  }
  //   componentDidMount() {
  //     const { location } = this.props;
  //     if (location.pathname === '/') {
  //       history.push('/home');
  //     }
  //   }
  tabClickHandle(title: string): void {
    this.setState({
      selectedTab: title,
    });
    if (title === '首页') {
      history.push('/home');
    } else if (title === '我的') {
      history.push('/mine');
    }
  }
  backgroundIcon(icon: string): ReactElement {
    return (
      <div
        className="iconBox"
        style={{
          background: `url(${icon}) center center /  21px 21px no-repeat`,
        }}
      />
    );
  }
  render() {
    const { tabList } = this.state;
    return (
      <div className="container">
        <TabBar
          unselectedTintColor="#000"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          {tabList.map(item => {
            return (
              <TabBar.Item
                icon={this.backgroundIcon(item.icon)}
                selectedIcon={this.backgroundIcon(item.selectIcon)}
                key={item.title}
                title={item.title}
                onPress={() => this.tabClickHandle(item.title)}
                selected={this.state.selectedTab === item.title}
              >
                {this.props.children}
              </TabBar.Item>
            );
          })}
        </TabBar>
      </div>
    );
  }
}
