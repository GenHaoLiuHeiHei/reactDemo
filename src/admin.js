import React from 'react';
import {Row, Col} from 'antd';
import NavLeft from './components/NavLeft';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css'
export default class Admin extends React.Component {
    componentWillMount(){
        console.log(this.props.children)
    }
    componentDidMount(){
        console.log(this.props.children)
    }
    render () {
        return (
            <Row className="bg-f8">
                <Col span={3}>
                    <NavLeft></NavLeft>       
                </Col>
                <Col span={21} className='wocao'>
                    <Header></Header>
                    <Row className="p-tb20 p-lr20">
                        <div className="contentRight bg-white p-tb15 p-lr15">
                            { this.props.children }
                        </div>
                    </Row>
                    <Footer></Footer>
                </Col>
            </Row>
        )
    }
}