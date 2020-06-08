<!-- 分类 -->
<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartCount}})</div>
    </nav-bar>

    <cart-list class="cart-list" :cart-list="cartList"></cart-list>

    <bottom-bar class="bottom-bar"></bottom-bar>
  </div>
</template>

<script>
  import NavBar from "@/components/commen/navbar/NavBar";
  import BottomBar from "./childComps/BottomBar";
  import CartList from './childComps/CartList'

  export default {
    name:'Cart',
    components: {
      NavBar,
      CartList,
      BottomBar
    },
    computed: {
      cartList() {
		    return this.$store.getters.cartList
      },
      cartCount(){
        return this.$store.getters.cartCount
      }
    },
    watch: {},
//方法集合
    methods: {
    },
    created() {
    },
    mounted() {
    },
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
  .cart {
    /* position: relative; */
    height: 100vh;
  }

  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }

  .cart-list {
    position: absolute;
    top: 44px;
    bottom: 89px;
    width: 100%;
  }
</style>