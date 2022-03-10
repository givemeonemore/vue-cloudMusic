import axios from "./axios";

let instance = axios;

export default {
  get(url: string, params: any) {
    let options: any = {};
    if (params) {
      options.params = params;
    }
    return instance.get(url, options);
  },
  post(url: any, params: any, data: any) {
    let options: any = {};
    if (params) {
      options.params = params;
    }
    return instance.post(url, data, options);
  },
  put(url: any, params: any) {
    return instance.put(url, params);
  },
  delete(url: any, params: any) {
    let options: any = {};
    if (params) {
      options.params = params;
    }
    return instance.delete(url, options);
  }
};
