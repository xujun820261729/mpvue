<template>
  <div class="page">
    <!-- 用户信息 -->
    <div class="userbg">
        <div class="header" v-if="checlogin">
            <div class="user">
                <img src="/static/images/fuli.png" />
                <div class="info">
                    <span>17512530773</span>
                    <div class="adress">
                        <span>收获地址</span>
                        <img src="/static/images/fuli.png" />
                    </div>
                </div>
            </div>

            <div class="more">
                <img src="/static/images/yaoqing.png" />
                <img src="/static/images/fuli.png" />
            </div>
        </div>

        <div class="button-sp-area" v-else>
            <button @click="loginbt" open-type='getUserInfo' @getuserinfo="getUserInfo"  class="weui-btn" type="primary" plain="true">点击登陆</button>
        </div>

    </div>

     <button @click="test">test vuex</button>


    
  </div>
</template>

<script>

export default {
  data() {
    return {
      checlogin: false
    }
  },
  beforeMount() {
    const that=this;
    wx.getStorage({
      key: 'user',
      success (res) {
        // 查询是否登陆
        that.checlogin=true;
      }
    })
  },
  methods: {
    loginbt(e) {
      console.log('点击事件');
    },
    test() {
      console.log('test', this.$store);
      this.$store.dispatch({
        type: "querylist"
      })
      // const res= query();
      // console.log('res', res);
    },
    getUserInfo(e) {
      const that=this;
      if (e.mp.detail.iv) {
        // 1. 成功后调用登陆接口
        wx.login({
          success (res) {
            if (res.code) {
              // flyo发起网络请求
              console.log('flyo发起网络请求', that);
              that.$fly.request({
                method: "post", // post/get 请求方式
                url: "/mms/country/queryValidZoneListForMallHome",
                body: {}
              }).then(res => {
                console.log(res);
                if (res.resultCode === '00000000') {
                  that.checlogin=true;
                }
                // 登陆成功后同步存数据
              })
            } else {
              wx.removeStorage({
                key: 'user',
                success (res) {
                  console.log(res)
                }
              })
              console.log('登录失败！' + res.errMsg)
            }
          }
        })
        // 获取登陆信息成功,同步存在本地,方便刷新用户信息
        wx.setStorage({
          key: "user",
          data: e.mp.detail
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    .userbg{
        background-color: aquamarine; 
        height: 350rpx;
    }

   .header{
       display: flex;
       justify-content: space-between;
       width: 680rpx;
       margin: 20rpx auto;
       .user{
           display: flex;
            img{
                width: 100rpx;
                height: 100rpx;
                border-radius: 50%;
            }
            .info{
                display: flex;
                flex-direction: column;
                height: 30rpx;
                margin-left: 20rpx;
                .adress{
                    border-radius: 30rpx;
                    background-color:rosybrown;
                    font-size: 20rpx;
                    width: 120rpx;
                    padding:0 20rpx;
                    height: 50rpx;
                    margin-top: 13rpx;
                    color: white;
                    img{
                        width: 20rpx;
                        height: 20rpx;
                        margin-left: 10rpx;
                    }
                }
            }
       }

       .more{
            img{
                width: 30rpx;
                height: 30rpx;
                padding-left: 30rpx;
            }
       }
   } 

   .weui-btn{
      margin-top: 50rpx;
   }



</style>
