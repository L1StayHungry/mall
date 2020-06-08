<!-- 商品详情页 -->
<template>
  <div id="detail">
    <div id="detailnavBar">
      <detail-nav-bar @titleClick="titleClick" :current-index="currentIndex"></detail-nav-bar>
    </div>
    <scroll class="content"
            ref="scroll"
            @scroll="contentScroll"
            :pull-up-load="true"
            :data="[topImages, goods, shop, detailInfo, commentInfo, recommendList]" 
            :probe-type="3">
      <div>
        <detail-swiper  ref="base" :top-images="topImages"></detail-swiper>
        <detail-base-info :goods="goods"></detail-base-info>
        <detail-shop-info :shop="shop"></detail-shop-info>
        <detail-goods-info :detail-info="detailInfo"></detail-goods-info>
        <detail-param-info ref="param" :param-info="paramInfo"></detail-param-info>
        <detail-comment-info ref="comment" :comment-info="commentInfo"></detail-comment-info>
        <detail-recommend-info ref="recommend" :recommend-list="recommendList"></detail-recommend-info>
      </div>
    </scroll>
    <back-top @scroll="contentScroll" @click.native="backClick" v-show="isShowBackTop">
      <img src="@/assets/img/common/top.png" alt="">
    </back-top>
    <detail-bottom-bar @addToCart="addCart"></detail-bottom-bar>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Scroll from "@/components/commen/scroll/Scroll";

import DetailNavBar from "@/views/details/childComps/DetailNavBar.vue";
import DetailSwiper from "@/views/details/childComps/DetailSwiper.vue";
import DetailBaseInfo from "@/views/details/childComps/DetailBaseInfo";
import DetailShopInfo from "@/views/details/childComps/DetailShopInfo";
import DetailGoodsInfo from "@/views/details/childComps/DetailGoodsInfo";
import DetailParamInfo from "@/views/details/childComps/DetailParamInfo";
import DetailCommentInfo from "@/views/details/childComps/DetailCommentInfo";
import DetailRecommendInfo from "@/views/details/childComps/DetailRecommendInfo";
import DetailBottomBar from "@/views/details/childComps/DetailBottomBar";

import {backTopMixin} from "@/common/mixin";
import { getDetail, Goods, Shop, GoodsParam, getRecommend} from "@/network/detail";
import { debounce } from "@/components/commen/utils/debounce"


export default {
  name: "Detail",
  //import引入的组件需要注入到对象中才能使用
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailRecommendInfo,
    DetailBottomBar,
    Scroll,
  },
  data() {
    //这里存放数据
    return {
      iid: "",
      topImages: [],
      goods: {},
      shop: {},
      detailInfo:{},
      paramInfo:{},
      recommendList: [],
      commentInfo:{},
      themeTops: [],
      currentIndex:0,
    };
  },
  mixins:[backTopMixin],
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    titleClick(index){
      // 主题锚点，点击主题后scrollTo对应锚点
      console.log(index);
      this.$refs.scroll.scrollTo(0,-this.themeTops[index],200)
    },
    _getOffsetTops() {
      this.themeTops = []
      this.themeTops.push(this.$refs.base.$el.offsetTop)
      this.themeTops.push(this.$refs.param.$el.offsetTop)
      this.themeTops.push(this.$refs.comment.$el.offsetTop)
      this.themeTops.push(this.$refs.recommend.$el.offsetTop)
      this.themeTops.push(Number.MAX_VALUE)
    },
    contentScroll(position){
      // console.log('调用sontentScroll');
      // 1,获取y值
      const positionY = -position.y;
      // 2.positionY和主题中的值进行比较
      this._listenScrollTheme(positionY);

      // betterScroll发生滚动的回调数据
      // 根据滚动的位置决定“返回顶部”按钮是否显示
      this.isShowBackTop = (-position.y)>1000 
    },
    _listenScrollTheme(position){
      let length = this.themeTops.length;
        for (let i = 0; i < length-1; i++) {
          // console.log(position+'-');
          // console.log(this.themeTops[i]+'+');
        if(position>this.themeTops[i] && position<this.themeTops[i+1]){
          // console.log(i);
          if (this.currentIndex !== i) {
              this.currentIndex = i;
          }
        }
      }
    },
    addCart(){
      console.log('addToCart');
      // 1.获取（购物车展示）商品信息
      const product = {}

      product.image=this.topImages[0];
      product.title=this.goods.title;
      product.desc=this.goods.desc;
      product.price=this.goods.realPrice;
      product.iid=this.iid;
      product.count=1;

      // console.log(product);
      
      // 2.将商品信息加到购物车
      // 通过mutation修改
      // this.$store.commit('addCart',product)
      // 通过action修改,用到promise回调
      this.$store.dispatch('addCart',product).then(res =>{
        this.$toast.show(res,1500)
      })
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    // 获取路由数据
    this.iid = this.$route.params.iid;

    getDetail(this.iid).then(res => {
      // console.log(res);
      const data = res.result;
      // 获取商品图片
      this.topImages = data.itemInfo.topImages;
      // 获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 获取店铺信息
      this.shop = new Shop(data.shopInfo);
      // 商品详情信息
      this.detailInfo = data.detailInfo;
      // 保存参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);
      // 保存评论信息
      if(data.rate.list){
        this.commentInfo = data.rate.list[0];
      }
    });
    
    getRecommend().then((res, error) => {
      if (error) return
      this.recommendList = res.data.list
    })
    
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // 图片加载完成的事件监听
    const refresh = debounce(this.$refs.scroll.refresh,500)   
    this.$bus.$on('detailItemImageLoad',() =>{
      // 解决better-scroll的bug
      refresh()
    })
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {
    // 获取需要的四个offsetTop
    this._getOffsetTops()
  }, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>

<style scoped>
#detail {
  height: 100vh;
  position: relative;
  z-index: 2;
  background-color: #fff;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 58px;
  left: 0;
  right: 0;
  overflow: hidden;
}

#detailnavBar {
  background-color: white;
  position: relative;
  z-index: 10;
}
</style>