<!-- 购物车汇总 -->
<template>
  <div class="bottom-bar">
    <check-buttom  class="check-all" @checkBtnClick="checkBtnClick" v-model="isSelectAll"></check-buttom>
    <span>全选</span>
    <span class="total-price">合计:￥{{totalPrice}}</span>
    <span class="buy-product" @click="calculateClick">去结算({{checkLength}})</span>
  </div>
</template>

<script>
  import CheckButtom from '@/components/content/checkButton/CheckButtom'
  
  export default {
    name:'BottomBar',
    props:{

    },
    components: {
      CheckButtom
    },
    data() {
      return {}
    },
    computed: {
      totalPrice(){
        const cartList = this.$store.getters.cartList;
        return cartList.filter(item => {
          return item.checked
        }).reduce((preValue,item) =>{
          return preValue + item.count * item.price
        },0).toFixed(2)
        //.reduce(初始值或计算结束后的返回值，当前元素)
      },
      checkLength(){
        return this.$store.getters.cartList.filter(item => item.checked).length
      },
      isSelectAll: function () {
        if(this.$store.getters.cartList.length===0){
          return false;
        }
        // find()方法返回数组中符合测试函数条件的第一个元素。否则返回undefined
        return this.$store.getters.cartList.find(item => item.checked === false) === undefined;
      }
    },
    watch: {},
    methods: {
      checkBtnClick(){
        // 判断是否有选中
        let haveSelect = this.$store.getters.cartList.find(item => !item.checked)
        // 有未选中则全部选中，否则全部不选中
        if (haveSelect) {
          this.$store.state.cartList.forEach(item => {
            item.checked = true;
            this.isSelectAll = true;
          });
        } else {
          this.$store.state.cartList.forEach(item => {
            item.checked = false;
            this.isSelectAll = false;
          });
        }
      },

      calculateClick(){
        // 判断是否有选中
        let haveSelect = this.$store.getters.cartList.find(item => !item.checked)
        if(!haveSelect){
          this.$toast.show('请选择购买的商品',1000)
        }
      },
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
  .bottom-bar{
    height: 40px;
    background-color: rgb(255, 255, 255);

    position: fixed;
    bottom: 50px;
    width: 100%;

    font-size: 14px;
    
    line-height: 40px;
    padding-left: 40px;
    box-sizing: border-box;

    /* 向 div 元素添加阴影： */
    box-shadow: 0 -1px 1px rgba(0, 0, 0, .2);
  }

  .check-all{
    position: absolute;
    line-height: 0;
    left: 12px;
    top: 13px;
  }

  .total-price {
    margin-left: 15px;
    font-size: 16px;
    color: #666;
  }

  .buy-product {
    background-color: var(--color-high-text);;
    color: #fff;
    width: 100px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    float: right;
  }
</style>