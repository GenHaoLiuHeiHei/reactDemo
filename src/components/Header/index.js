import React from 'react';
import { Row , Col, Modal } from 'antd';
import { connect } from 'react-redux';
import { loginContent } from './../../redux/action';
import './index.less';
const { confirm } = Modal;
class Header extends React.Component {
    state = {};
    componentWillMount() {
        this.setState({
            userName: 'BlackHandSome'
        })
    };
    signOut = () => {
        let this_ = this;
        confirm({
          title: '提示',
          content: '是否确实登出？',
          onOk() {
            const { dispatch } = this_.props;
            localStorage.setItem('isLogged', '0')
            dispatch(loginContent(localStorage.getItem('isLogged')));
          },
          onCancel() {},
        });
    };
    render () {
        return (
           <div className="bg-white">
                <div className="p-tb15 text-right p-lr15 font-16">
                    <span className="m-r30">欢迎 &nbsp; {this.state.userName}</span>
                    <span className="color-red pointer" onClick={this.signOut}>退出</span>
                </div>
                <div className="headerNav p-tb05 p-lr15">
                    <Row>
                        <Col span={12}>
                            <div className="font-20 dib p-lr20 headerActive">
                                <span>{this.props.menuName}</span>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="text-right m-t05">
                                <span className="m-r05">2019-10-12 11:11 </span>
                                <span>多云转晴</span>
                            </div>
                        </Col>
                    </Row>
                </div>
           </div>
        )
    }
}
const menuNameCenter = state => {
    return {
        menuName:state.menuName
    }
}
export default connect(menuNameCenter)(Header)