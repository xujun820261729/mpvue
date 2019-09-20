/**
 * 1. 设计逻辑:由于是单个小程序,api较少，通过页面来划分.
 * 2. 把所有的逻辑都放在此文件处理,页面存放较少的逻辑,存储通过store
 * 3. 页面传递的逻辑通过页面处理
 * Created by xujun 2019.9.20
*/
import {query} from '../utils/api'

// 我的页面逻辑
const login={
  querylist({ commit }) {
    query().then(res => {

    })
  }
}

// 大市场页面
const market={}


// 分类页面
const classify={}


// 充值页面
const recharge={}


// 首页页面
const home={}



export default {...login, ...market, ...classify, ...recharge, ...home}
