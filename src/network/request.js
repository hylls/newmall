import axios from 'axios'
// 0. 封装网络请求的函数
export function request(config) {
  // 1. 创建instance1实例
  const instance1 = axios.create({
    baseURL: 'http://144.77.54.217:8000',
    timeout: 6000
  })
  // 1.1 请求拦截
  instance1.interceptors.request.use(config => {
    return config
  }, err => {
  })
  // 1.2 响应拦截
  instance1.interceptors.response.use(res => {
    return res
  }, err => {

  })
  // 2. 发送真正的网络请求
  return instance1(config)
}