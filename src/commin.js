import React from 'react';
import {Row, Col} from 'antd';
// import NavLeft from './components/NavLeft';
// import Header from './components/Header';
// import Footer from './components/Footer';
import './index.css'
export default class Commin extends React.Component {
    render () {
        return (
            <Row className="bg-f8">
                <Col span={24} className='wocao'>
                    {/* <Header></Header> */}
                    <Row className="p-tb20 p-lr20">
                        <div className="contentRight bg-white p-tb15 p-lr15">
                            { this.props.children }
                        </div>
                    </Row>
                    {/* <Footer></Footer> */}
                </Col>
            </Row>
        )
    }
}