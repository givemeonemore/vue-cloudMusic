import * as types from "../types";

const initPageState = () => {
  return {
    userInfo: {
      userName: "",
      password: "",
      avator: ""
    }
  };
};
const user = {
  state: initPageState(),
  mutations: {
    [types.SAVE_USER](state: any, pageState: any) {
      for (const prop in pageState) {
        state[prop] = pageState[prop];
      }
    }
  },
  actions: {}
};

export default user;
