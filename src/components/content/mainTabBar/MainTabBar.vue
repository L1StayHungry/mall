<!-- MainTabBar -->
<template>
  <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="@/assets/img/tabbar/首页.svg" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/首页-active.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="@/assets/img/tabbar/分类.svg" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/分类-active.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-icon" src="@/assets/img/tabbar/购物.svg" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/购物-active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="@/assets/img/tabbar/我的.svg" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/我的-active.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
  import TabBar from '@/components/commen/tabbar/tabbar.vue'
  import TabBarItem from '@/components/commen/tabbar/tabbarItem.vue'

  export default {
    name:'MainTabBar',
    //import引入的组件需要注入到对象中才能使用
    components: { 
      TabBar,
      TabBarItem,
    },
    data() {
    //这里存放数据
      return {

      };
    },
    //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
    watch: {},
//方法集合
    methods: {

    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {

    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {

    },
    beforeCreate() {}, //生命周期 - 创建之前
    beforeMount() {}, //生命周期 - 挂载之前
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
  }
</script>

<style>

</style>