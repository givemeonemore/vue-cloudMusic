import api from '../index';
// import urls from './urls';
import baseUrl from '../baseUrl';

export default {
  getJson(url: string, params: any) {
    // return 出去一个promise
    return api.get(baseUrl + url, params)
  }
}
