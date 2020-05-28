<!-- BetterScroll封装 -->
<template>
  <div ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
  import BScroll from 'better-scroll'

  export default {
    name:'Scroll',
    props:{
      probeType: {
        type: Number,
        // 0和1不侦测,2侦测手指位置，3滚动过程都侦测
        default: 1
      },
      data: {
		    type: Array,
        default: () => {
          return []
        }
      },
      // 是否支持上拉加载更多（回调事件）
      pullUpLoad: {
		    type: Boolean,
        default: false
      }
    },
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
    //这里存放数据
      return {
        scroll:null,
      };
    },
    mounted() {
      setTimeout(this.__initScroll,20)
    },
//方法集合
    methods: {
      __initScroll(){
        // 初始化BScroll对象
        if(!this.$refs.wrapper) return
        this.scroll = new BScroll(this.$refs.wrapper,{
          click:true,
          probeType:this.probeType,
          pullUpLoad:this.pullUpLoad,
        })

        // 将监听的位置回调
        this.scroll.on('scroll',position =>{
          this.$emit('scroll',position)
        })

        // 监听底部上拉
        this.scroll.on('pullingUp',()=>{
          this.$emit('pullingUp')
        })
      },
      scrollTo(x,y,time=300){
        this.scroll.scrollTo(x,y,time)
      },
      finishPullUp(){
        this.scroll.finishPullUp()
      },
      refresh(){
        this.scroll.refresh()
      }
    },
  }
</script>

<style>

</style>