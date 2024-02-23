// 进行axios二次封装：使用请求与响应拦截器
import axios from "axios";
import { ElMessage } from "element-plus";

// 利用axios的create方法创建axios实例
let request = axios.create({
  // 基础路径
  baseURL: import.meta.env.VITE_APP_BASE_API, //在基础路径上添加/api
  timeout: 5000,
});

// 第二部：request添加请求与响应拦截器
request.interceptors.request.use((config) => {
  // config配置对象，headers属性请求头 ，经常给服务器端携带公共参数
  console.log(config);
  // 返回配置对象
  return config;
});

// 三：配置响应拦截器
request.interceptors.response.use(
  //成功的回调
  // 简化数据
  (response) => {
    return response.data;
  },
  (error) => {
    //   失败的回调：处理http网络错误
    let message = "";
    let status = error.response.status;
    switch (status) {
      case 401:
        message = "TONKE was out of date";
        break;
      case 403:
        message = "do not have permission";
        break;
      case 404:
        message = "address error";
        break;
      case 500:
        message = "server error";
        break;
      default:
        message = "network busy";
    }
    //提示错误信息
    ElMessage({
      type: "error",
      message,
    });

    return Promise.reject(error);
  }
);
export default request;
