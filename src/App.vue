<template>
  <div>
    <!-- 头部 -->
    <div class="header">
      <!-- 1.0 导航栏头部 -->
      <div class="head-top">
        <div class="section">
          <div class="left-box">
            <span>黑马买买买</span>
            <a target="_blank" href="#"></a>
            <a target="_blank" href="#"></a>
          </div>
          <div id="menu" class="right-box">
            <span style="display: none;">
              <a href class>登录</a>
              <strong>|</strong>
              <a href class>注册</a>
              <strong>|</strong>
            </span>
            <span>
              <!-- <a href class>会员中心</a> -->
              <router-link to='/user'>会员中心</router-link>
              <strong>|</strong>
              <router-link to='/login'>退出</router-link>
              <strong>|</strong>
            </span>
            <a href class>
              <i class="iconfont icon-cart"></i>购物车(
              <span id="shoppingCartCount">
                <span>4</span>
              </span>)
            </a>
          </div>
        </div>
      </div>
      <!-- 2.0 导航条 -->
      <div class="head-nav">
        <div class="section">
          <div id="menu2" class="nav-box menuhd">
            <ul>
              <li class="index">
                <router-link to="/index">
                  <span class="out" style="top: 0px;">首页</span>
                </router-link>
              </li>
              <li class="news">
                <router-link to="/index">
                  <span class="out" style="top: 0px;">每日精选</span>
                </router-link>
              </li>
              <li class="photo">
                <router-link to="/index">
                  <span class="out" style="top: 0px;">秒杀专区</span>
                </router-link>
              </li>
              <li class="video">
                <router-link to="/index">
                  <span class="out" style="top: 0px;">黑马超市</span>
                </router-link>
              </li>
              <li class="down">
                <router-link to="/index">
                  <span class="out" style="top: 0px;">会员权益</span>
                </router-link>
              </li>
              <li class="goods">
                <router-link to="/index">
                  <span class="out" style="top: 0px;">购物商城</span>
                </router-link>
              </li>
            </ul>
          </div>
          <div class="search-box">
            <div class="input-box">
              <input
                id="keywords"
                name="keywords"
                type="text"
                onkeydown="if(event.keyCode==13){};"
                placeholder="输入关健字"
                x-webkit-speech
              >
            </div>
            <a href="javascript:;">
              <i class="iconfont icon-search"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
    <!-- 尾部 -->
    <div class="footer">
      <div class="section">
        <div class="foot-nav">
          <a href>关于我们</a>
          <strong>|</strong>
          <a href>联系我们</a>
          <strong>|</strong>
          <a href>联系客服</a>
          <strong>|</strong>
          <a href>合作招商</a>
          <strong>|</strong>
          <a href>商家帮助</a>
          <strong>|</strong>
          <a href>营销中心</a>
          <strong>|</strong>
          <a href>隐私政策</a>
        </div>
        <div class="foot-box">
          <div class="copyright">
            <p>版权所有 黑马买买买</p>
            <p>公司地址： 联系电话：</p>
            <p class="gray">Copyright © 2009-2018 itcast Corporation,All Rights Reserved.</p>
          </div>
          <div class="service">
            <p>周一至周日 9:00-24:00</p>
            <a href="#">
              <i class="iconfont icon-phone"></i>在线客服
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// const id= this.$route.params.id;
name:'detail'
export default {
  // data(){
  //   return{
  //     id:this.$route.params.id
  //   }
  // },
  created(){
 console.log(this.$route.params.id);
  }
 
};
</script>

<style>
</style>
