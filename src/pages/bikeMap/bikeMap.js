import React from 'react';
export default class Dome extends React.Component {
    componentDidMount(){
        var map = new window.BMap.Map("container");
        // 创建地图实例  
        var point = new window.BMap.Point(116.404, 39.915);
        // 创建点坐标  
        map.centerAndZoom(point, 15)
    }
    toOther () {
        window.open('#/commin/other');
    }
    render () {
        return (
            <div>
                <div id="container" style={{ height: 400 }}></div>
                <button onClick={this.toOther}>to other</button>
            </div>
        )
    }
}