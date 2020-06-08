<!-- 首页 -->
<template>
  <div id="home">
    <!-- 顶部导航栏 -->
    <div id="home-nav">
      <nav-bar><div slot="center"><h4>购物街</h4></div></nav-bar>
    </div>

    <!-- betterScroll滚动区域 -->
    <!-- 要加冒号。否则传过去的参数都是字符串 -->
    <scroll class="content" 
            ref="scroll"
            :pull-up-load="true"
            :probe-type="3"
            @scroll="contentScroll"
            @pullingUp="loadMoreGoods">
      <!-- 轮播图 -->
      <home-swiper :banners="banners"></home-swiper>
      <!-- 推荐 -->
      <home-recommend-view :recommend="recommend"></home-recommend-view>
      <!-- 本周流行 -->
      <feature-view></feature-view>
      <!--  -->
      <tab-control 
        ref="tabControl"
        :titles="['流行', '新款', '精选']"
        class="tab-control"
        @itemClick="tabClick"
      ></tab-control>
      <!-- 商品列表 -->
      <good-list :goods="showGoods"></good-list>
    </scroll>

    <!-- 返回顶部按钮 -->
    <back-top @click.native="backClick" v-show=isShowBackTop></back-top>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import NavBar from "@/components/commen/navbar/NavBar";
import Scroll from "@/components/commen/scroll/Scroll";

import BackTop from "@/components/content/backtop/BackTop";
import TabControl from "@/components/content/tabcontrol/TabControl"
import GoodList from "@/components/content/goods/GoodList"

import HomeSwiper from "@/views/home/childComps/homeSwiper"
import HomeRecommendView from "@/views/home/childComps/homeRecommendView"
import FeatureView from "@/views/home/childComps/featureView"

import {backTopMixin} from "@/common/mixin";
import { getHomeMultidata,getHomeGoods } from "@/network/home.js";
import { debounce } from "@/components/commen/utils/debounce"
// import { getHomeGoods } from "@/network/home.js";

export default {
  name: "Home",
  //import引入的组件需要注入到对象中才能使用
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
    TabControl,
    GoodList,
    Scroll,
    BackTop,
  },
  data() {
    //这里存放数据
    return {
      result: null,
      banners: [],
      recommend:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      },
      currentType:'pop',
      // isShowBackTop:false,//返回顶部按钮
      // tabOffsetTop:0,//判断tabControl是否吸顶
      saveY:0,
    };
  },
  mixins:[backTopMixin],
  //监听属性 类似于data概念
  computed: {
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    getHomeMultidata(){
      getHomeMultidata().then(res => {
        // this.result = res;
        // 轮播图数据
        this.banners = res.data.banner.list;
        // 推荐栏数据
        this.recommend = res.data.recommend.list;
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res => {
        // for(let n of res.list){
        //   this.goods[type].list.push(n)
        // }
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        // 允许再次上拉加载更多（回调）
        this.$refs.scroll.finishPullUp()

      })
    },

    // 事件监听方法
    tabClick(index){
      switch(index){
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },   
    // 加载更多数据
    loadMoreGoods(){
      this.getHomeGoods(this.currentType)
    },
     
    contentScroll(position){
      // betterScroll发生滚动的回调数据
      // 根据滚动的位置决定“返回顶部”按钮是否显示
      this.isShowBackTop = (-position.y)>1000    
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    // 1.请求多个数据
    this.getHomeMultidata()
    // 请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

  },
  mounted() {
    // 图片加载完成的事件监听
    const refresh = debounce(this.$refs.scroll.refresh,500)   
    this.$bus.$on('homeItemImageLoad',() =>{
      // 解决better-scroll的bug
      refresh()
    })

    // 获取tabControl的offsetTop
    // 组件元素$el用于获取组件中的元素
    // this.tabOffsetTop=this.$refs.tabControl.$el.offsetTop
  },
  activated() {
    console.log('activeted----Y:'+this.saveY);
    
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    // this.$refs.scroll.refresh()
  },
  deactivated() {
    this.saveY=this.$refs.scroll.getCurrentY()
    console.log(this.saveY);
    
  },
};
</script>

<style scoped>
#home{
  width:100%;
  /* padding: 44px 0 50px; */

}

#home-nav {
  background-color: var(--color-tint);
  color: white;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10;
}

/* .tab-control{
  粘性定位
  position:sticky;
  top:44px;
  background-color: #fff;
  z-index: 10;
} */

.content{
  position: absolute;
  top: 44px;
  bottom:49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>