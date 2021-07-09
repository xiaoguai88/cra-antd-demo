import axios from "axios";
import { message } from "antd";

// 自定义设置-创建axios实例
const service = axios.create({
  baseURL: "https://rapserver.sunmi.com/app/mock/382",
});
// get请求
export const getArticalList = (params) => {
  return service("/api/getData", {
    params,
  });
};
// post请求
export const getInfoByPost = (params) => {
  return service("/api/getData", {
    method: "post",
    data: { ...params },
  });
};
