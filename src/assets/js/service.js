/* eslint-disable */
import axios from 'axios'
// 创建axios实例
//axios.defaults.withCredentials = true;
const service = axios.create({
    baseURL: '',
    timeout: 200000, // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
    config => {
        return config
    },
    error => {
        Promise.reject(error)
    }
)
// response 拦截器
service.interceptors.response.use(
    response => {
        if (response.headers['content-type'] === 'image/jpeg')
            return response.data
        const code = response.data.code
        if (code == 200) {
            return response.data
        } else if (code == 1008) {
            return Promise.reject('error')
        } else if (code == 500 && response.data.data == '获取开户信息失败,该会员未开户！') {
            return Promise.reject('error')
        } else if (code == 1006) {
            Message.error({
                message: response.data.message,
            })

        } else {

            return Promise.reject('error')
        }
    },
    error => {

        return Promise.reject(error)
    }
)
export default service
