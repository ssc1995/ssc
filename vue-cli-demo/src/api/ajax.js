
import axios from "axios";
import { Message,Loading } from 'element-ui';
// 
axios.defaults.baseURL = "http://192.168.0.102:1901/";  // 基本路径 
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  console.log(config);
  Loading.service({   //使用loading在数据请求之前的动画
    fullscreen: true,
    text:"正在加载中,请耐心等待...",
    spinner:"el-icon-loading",
    background:"rgba(0, 0, 0, 0.8)"
  });
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  let loadingInstance1 = Loading.service({ fullscreen: true });  //Loading在数据请求成功之后的动画关闭效果
  loadingInstance1.close();
  return response;
}, function (error) {
  // console.log(error);
  // 对响应错误做点什么
  let loadingInstance1 = Loading.service({fullscreen: true});  //Loading在数据请求成功之后的动画关闭效果
  loadingInstance1.close();
  return Promise.reject(error);
});


export default axios;