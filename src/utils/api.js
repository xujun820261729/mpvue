/**
 * Created by xujun 2019.9.20
 * 所有请求
 */
import fly from './fly';

export function query(params) {
  return fly.request({
    url: '/mms/country/queryValidZoneListForMallHome',
    method: 'post',
    body: params
  });
}

