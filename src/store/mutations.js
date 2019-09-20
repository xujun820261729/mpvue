/**
 * 1. 设计逻辑:纯函数
 * Created by xujun 2019.9.20
*/



import * as type from './mutation-types';
const mutations = {
  [type.SET_MPVUEINFO](state, mpvueInfo) { // eslint-disable-line
    state.mpvueInfo = mpvueInfo;
  }
}

export default mutations;
