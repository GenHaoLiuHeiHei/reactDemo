import axios from 'axios'
import { message } from 'antd';
import qs from 'qs'
export default class ajax {
    static postAjax(url, options = {}) {
        return new Promise((resovle, reject) => {
            axios({ 
                headers: {
                    'Content-Type': 'application/json'
                },
                baseURL: 'http://192.168.3.40:3030',
                url, 
                method: 'post', 
                data: qs.stringify(options),
                timeout: 30000
            }).then((res)=>{
                if (res.data.output.flag) {
                    resovle(res);
                } else {
                    reject(res);
                }
            }).catch((error)=>{
                // debugger
                // 错误提示
                message.error('请求失败');
            })
        });
    }
    static getAjax(url, options = {}) {
        return new Promise((resovle, reject) => {
            axios({ 
                baseURL: 'http://192.168.3.40:3030',
                url, 
                method: 'get', 
                params: options,
                timeout: 30000
            }).then((res)=>{
                if (res.data.output.flag) {
                    resovle(res);
                } else {
                    reject(res);
                }
            }).catch((error)=>{
                // debugger
                // 错误提示
                message.error('请求失败');
            })
        });
    }
}
// export default ajax;
