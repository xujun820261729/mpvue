<template>
  <div class="home">
    <!-- 头部 -->
    <swiper class="swiper" indicator-dots="indicatorDots" autoplay="true" interval="5000" duration="900" circular="true" @change="swiperChange" @animationfinish="animationfinish">
        <div v-for="(item, index) in imgUrls" :key="index">
            <swiper-item>
            <image :src="item" class="slide-image" />
            </swiper-item>
        </div>
    </swiper>

    <div class="seach">
        <icon class="weui-icon-search" type="search" size="14"></icon>
        <div class="weui-search-bar__text">搜索</div>
    </div>

    <!-- 九宫格 -->
    <div style="gredsss">
        <div class="weui-grids">
            <block v-for="(item,index) in grids" :key="index">
                <navigator url="" class="weui-grid" hover-class="weui-grid_active">
                    <image class="weui-grid__icon" :src="item.image" />
                    <div class="weui-grid__label">{{item.title}}</div>
                </navigator>
            </block>
        </div>
    </div>

    <!-- 宣传部分 -->
    <navigator url="" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
        <div class="weui-cell__hd">
        <image src="/static/images/explore-hl.png" style="margin-right: 5px;vertical-align: middle;width:20px; height: 20px;"></image>
        </div>
        <div class="weui-cell__bd">恭喜 <sapn style="color:red;">精致发送</sapn> $16.3 元话费</div>
        <div class="weui-cell__ft weui-cell__ft_in-access">更多</div>
    </navigator>

    <!-- 广告部分 -->
    <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" :circular="circular" @change="swiperChange" @animationfinish="animationfinish">
        <div v-for="(item, index) in imgUrls" :key="index">
          <swiper-item>
            <image :src="item" class="slide-image" />
          </swiper-item>
        </div>
    </swiper>

    <!-- 为你精选 -->
    <div class="weui-cell">
        <div class="weui-cell__hd">
        <image src="/static/images/xingxing.png" style="margin-right: 5px;vertical-align: middle;width:20px; height: 20px;"></image>
        </div>
        <div class="weui-cell__bd">为你精选</div>
    </div>

    <div class="swiper-home">
        <scroll-view scroll-x="true" style="width: 100%">
            <view class="swiper-item" v-for="(item,index) in imgUrls" :key="index" >
                <img :src="item">
            </view>
        </scroll-view>
    </div>

    <!-- 超值热砍 -->
    <div class="weui-cell">
        <div class="weui-cell__hd">
        <image src="/static/images/huo1.png" style="margin-right: 5px;vertical-align: middle;width:20px; height: 20px;"></image>
        </div>
        <div class="weui-cell__bd">超值热砍</div>
    </div>

    <div class="weui-flex">
        <img src="/static/images/ad-0.jpg"class="weui-flex__item">
        <img src="/static/images/ad-0.jpg"class="weui-flex__item">
        <img src="/static/images/ad-0.jpg"class="weui-flex__item">
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
          ],
          inputShowed: false,
          inputVal: '',
          grids: [
            {image: "/static/images/logo1.png", title: "趣砍"},
            {image: "/static/images/fuli.png", title: "每日福利"},
            {image: "/static/images/logo7.png", title: "充值"},
            {image: "/static/images/yaoqing.png", title: "邀请赚钱"},
            {image: "/static/images/qiandao.png", title: "签到有礼"},
            {image: "/static/images/xinshouzhiyin.png", title: "新手指引"}
          ]
        }
  },
  methods: {
        swiperChange(e) {
          console.log('第' + e.mp.detail.current + '张轮播图发生了滑动');
        },
        animationfinish(e) {
          console.log('第' + e.mp.detail.current + '张轮播图滑动结束');
        },
        clearInput() {
          this.inputVal = '';
        },
        showInput() {
          this.inputShowed = true;
        }
  }
    }
</script>

<style scoped>
.slide-image {
  width: 100%;
  height: 100%;
  background-size:cover;
}

.weui-search-bar{
    position: relative;
    top: -240rpx;
    background-color: transparent;
}

.seach{
  width: 610rpx;
  align-self: center;
  padding: 10rpx 30rpx;
  height: 50rpx;
  border-radius: 30rpx;
  position: relative;
  top: -260rpx;
  left: 35rpx;
  background-color: rgba(206, 202, 202, 0.3);
}

.weui-grids,.weui-grid,.weui-search-ba{
   border: none;
}

.theme_scroll{
  width:100%; 
  margin:35rpx;
  height: 200rpx;
  white-space: nowrap;
}

.weui-grid{
   padding: 23rpx 20rpx;
}

.swiper-home{
    width: 100%;
    height: 170rpx;
    box-sizing: border-box;
    display: flex;
    white-space: nowrap;
}

.swiper-home  .swiper-item{
    width: 350rpx;
    height: 100%;
    display: inline-block;
    margin: 0  20rpx;  
    border: 1px solid #f1b421;
}

.swiper-home img{
   width: 100%;
   height: 100%;
}

.weui-flex__item{
    height: 170rpx;
    width:170rpx;
    padding:20rpx;
}


</style>
