<!-- 购物车商品列表 -->
<template>
  <div class="shop-item">
    <!-- 是否选中此商品 -->
    <div class="item-selector">
      <check-buttom @checkBtnClick="checkClike" v-model="itemInfo.checked"></check-buttom>
    </div>

    <!-- 商品图片 -->
    <div class="item-img">
      <img :src="itemInfo.image" alt="商品图片">
    </div>

    <!-- 商品描述 -->
    <div class="item-info">
      <div class="item-title">{{itemInfo.title}}</div>
      <div class="item-desc">商品描述：{{itemInfo.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">¥{{itemInfo.price}}</div>
        <div class="item-count right">x{{itemInfo.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButtom from '@/components/content/checkButton/CheckButtom'

  export default {
    name:'CartListItem',
    props:{
      itemInfo:Object
    },
    components: {
      CheckButtom,
    },
    data() {
      return {}
    },
    computed: {},
    watch: {},
    methods: {
      checkClike(){
        this.itemInfo.checked = !this.itemInfo.checked
      }
    },
    created() {},
    mounted() {},
    beforeCreate() {},
    beforeMount() {},
    beforeUpdate() {},
    updated() {},
    beforeDestroy() {},
    destroyed() {},
    activated() {},
  }
</script>

<style scoped>
  .shop-item{
    width: 100%;
    display: flex;
    /* font-size: 0; */
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }

  .item-selector{
    width: 14%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-title, .item-desc{
    font-size: 14px;

    overflow: hidden;
    /* 规定段落中的文本不进行换行 */
    white-space: nowrap;
    /* 显示省略符号来代表被修剪的文本 */
    text-overflow: ellipsis;
  }

  .item-img{
    padding: 5px;
  }

  .item-img img{
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
  }

  .item-info{
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }

  .item-info .item-desc {
    font-size: 14px;
    color: #666;
    margin-top: 15px;
  }

  .info-bottom {
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }

  .info-bottom .item-price {
    color: orangered;
  }
</style>