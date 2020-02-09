import React from 'react';
import {Row, Col, Card} from 'antd'
export default class Gallery extends React.Component {
    
    render () {
        const imgList = [
            ['1.png', '2.png', '3.png', '4.png'],
            ['6.png', '7.png', '8.png', '9.png'],
            ['11.png', '12.png', '13.png', '14.png'],
            ['16.png', '17.png', '18.png', '19.png'],
            ['21.png', '22.png', '23.png', '24.png'],
        ]
        const imgMap = imgList.map((item, i)=>{
            return (
                <Col md={6} key={i}>
                {
                    item.map((v, s)=>{
                        return (
                            <Card cover={<img src={'/gallery/' + v}/>} key={s}>
                                <Card.Meta title='这是一张图片' description='我喜欢这张图片'/>
                            </Card>
                        )
                    })
                }
                </Col>
            )
        })
        return (
            <div className="content">
                <Row>
                    {imgMap}
                </Row>
            </div>
        )
    }
}