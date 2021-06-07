import Vue from 'vue';
import axios from 'axios';

// 当前环境url
const baseURL = process.env.VUE_APP_API_BASE_URL
// 创建axios实例
const _axios = axios.create({
  baseURL,
  timeout: 6000
})
// 请求处理
_axios.interceptors.request.use(function(config) {
  config.headers['Content-Type'] = 'application/json;charset=UTF-8';
  console.log(config)
  return config
}, function(error) {
  return Promise.reject(error)
})
// 响应处理
_axios.interceptors.response.use(function(response) {
  // console.log(response)
  return {
    data: response.data,
    status: response.status,
    message: response.statusText
  }
}, function(error) {
  return Promise.reject(error)
})

const $axios = {
  get: function(config) {
    return _axios({
      ...config,
      method: 'get',
    })
  },
  post: function(config) {
    return _axios({
      ...config,
      method: 'post',
      data: config.params
    })
  }
}

const plugin = {
  install() {
    Object.defineProperty(Vue.prototype, '$axios', {
      get: function() {
        return $axios
      }
    })
  }
}

Vue.use(plugin)