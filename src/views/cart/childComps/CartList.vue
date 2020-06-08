<!-- CartList -->
<template>
  <scroll class="content" ref="scroll" 
          :pull-up-load="true"
          :probe-type="3">
    <div>
      <cart-list-item v-for="item in cartList" :key="item.iid" :item-info="item"></cart-list-item>
    </div>
  </scroll>
</template>

<script>
  import Scroll from '@/components/commen/scroll/Scroll'
  import CartListItem from './CartListItem'

  export default {
    name:'CartList',
    props:{
      cartList:{
        type:Array,
        default(){
          return[]
        }
      }
    },
    components: {
      Scroll,
      CartListItem,
    },
    data() {
      return {}
    },
    computed: {},
    watch: {},
    methods: {},
    created() {},
    mounted() {},
  }
</script>

<style scoped>
  .content{
    height: calc(100%-44px-49px);
    overflow: hidden;
  }
</style>