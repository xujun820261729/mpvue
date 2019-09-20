<template>
  <div class="page">
    <view class="page__hd">
      <view class="page__title">Swiper</view>
      <view class="page__desc">滑块视图容器，这里采用小程序原生 swiper 组件实现。</view>
    </view>
    <div class="page__bd page__bd_spacing">
      <swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" :circular="circular" @change="swiperChange" @animationfinish="animationfinish">
        <div v-for="(item, index) in imgUrls" :key="index">
          <swiper-item>
            <image :src="item" class="slide-image" />
          </swiper-item>
        </div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 900,
      circular: true,
      imgUrls: [
        '/static/images/ad-0.jpg',
        '/static/images/ad-big.jpg',
        '/static/images/icon_nav_button.png'
      ]
    }
  },
  methods: {
    swiperChange(e) {
      console.log('第' + e.mp.detail.current + '张轮播图发生了滑动');
    },
    animationfinish(e) {
      console.log('第' + e.mp.detail.current + '张轮播图滑动结束');
    }
  }
}
</script>

<style>
.slide-image {
  width: 100%;
  height: 100%;
}
</style>
