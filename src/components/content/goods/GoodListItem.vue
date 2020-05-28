<!-- 商品详情 -->
<template>
  <div class="goods-item" @click="goToDetail">
    <img :src="goodsItem.show.img" alt="商品图片">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">￥{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

  export default {
    name:'GoodListItem',
    props:{
      goodsItem:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    //import引入的组件需要注入到对象中才能使用
    components: {},
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
      goToDetail(){
        // 1.获取iid
        let iid = this.goodsItem.iid;

        // 2.跳转到详情页面
        this.$router.push({path: '/detail', query: {iid}})
      }
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

<style scoped>
  .goods-item{
    padding-bottom: 40px;
    position:relative;

    width:48%;
  }

  .goods-item img{
    width:100%;
    border-radius: 5px;
  }

  .goods-info{
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    /* overflow溢出处理：
    scroll滚动机制；
    hidden内容会被修剪并且其余内容不可见 */
    overflow: hidden;
    /* 文本溢出处理；
    clip修剪文本；
    ellipsis显示省略号来代表被修剪的文本；
    string使用给定的字符来代表被修剪的文本 */
    text-overflow: ellipsis;
    /* 规定段落中的文本不进行换行 */
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 0;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>