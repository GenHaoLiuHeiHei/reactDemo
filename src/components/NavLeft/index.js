import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import MenuList from './../../config/menuConfig';
import { connect } from 'react-redux';
import { menuTypeName } from './../../redux/action';
import './index.less'

const { SubMenu } = Menu;
class NavLeft extends React.Component {
    state = {
        colorSelectMenu: ''
    }
    // 组件渲染之前，被调用一次
    componentWillMount ()  {
        let colorSelectMenu = window.location.hash.replace(/#|\?.*$/g, '');
        this.setState({
            colorSelectMenu,
            MenuList: this.getMenu(MenuList)
        });
    }; 
    
    componentDidMount () {
        console.log(this.state.MenuList);
        this.mapMenuList(this.state.MenuList)
    }
    mapMenuList (data) {
        data.map((v, i) => {
            if (v.key === this.state.colorSelectMenu) {
                const { dispatch } = this.props;
                dispatch(menuTypeName(v.props.title));
            };
            if (v.props.children && v.props.children.length > 2) {
                this.mapMenuList(v.props.children);
            }
        })
    }

    handleClick = ({item, key})=> {
        this.setState({
            colorSelectMenu: key
        })
        const { dispatch } = this.props;
        dispatch(menuTypeName(item.props.title));
    }

    getMenu = ((data) => {
        return data.map(v => {
            if (v.children) {
                return (
                    <SubMenu key={v.key} title={v.title}>
                        {this.getMenu(v.children)}
                    </SubMenu>
                )
            }
            return (
                <Menu.Item key={v.key} title={v.title}>
                    <NavLink to={v.key}>
                        {v.title}
                    </NavLink>    
                </Menu.Item>
            )
        })
    });

    render () {
        return (
            <div className="leftMenu">
                <div className="p-tb15 p-lr15 flex align-items-center">
                    <div>
                        <img src="/assets/logo192.png" alt="" className="topLogo"/>
                    </div>
                    <div className="color-white m-l10 font-20">
                        全家桶哦
                    </div>
                </div>
                <Menu theme="dark" mode="vertical" onClick={this.handleClick} selectedKeys={this.state.colorSelectMenu}>
                    {this.state.MenuList}
                </Menu>
            </div>
        )
    }
}
export default connect()(NavLeft)