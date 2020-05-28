<!-- 分类 -->
<template>
  <div class="wrapper">
    <button @click="btnClick">按钮</button>
    <ul class="content">
      <li>列表111111</li><li>列表111111</li><li>列表111111</li><li>列表111111</li><li>列表111111</li><li>列表111111</li><li>列表111111</li><li>列表111111</li><li>列表111111</li><li>列表111111</li><li>列表111111</li><li>列表111111</li>
      <li>列表111111</li><li>列表111111</li><li>列表111111</li><li>列表111111</li><li>列表111111</li><li>列表111111</li><li>列表111111</li><li>列表111111</li><li>列表111111</li><li>列表111111</li><li>列表111111</li><li>列表111111</li>
      <li>列表111111</li><li>列表111111</li><li>列表111111</li><li>列表111111</li><li>列表111111</li><li>列表111111</li><li>列表111111</li><li>列表111111</li><li>列表111111</li><li>列表111111</li><li>列表111111</li><li>列表111111</li>
      <li>列表111111</li><li>列表111111</li><li>列表111111</li><li>列表111111</li><li>列表111111</li><li>列表111111</li><li>列表111111</li><li>列表111111</li><li>列表111111</li><li>列表111111</li><li>列表111111</li><li>列表111111</li>
      <li>列表111111</li><li>列表111111</li><li>列表111111</li><li>列表111111</li><li>列表111111</li><li>列表111111</li><li>列表111111</li><li>列表111111</li><li>列表111111</li><li>列表111111</li><li>列表111111</li><li>列表111111</li>
    </ul>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
  import BScroll from 'better-scroll'

  export default {
    name:'Category',
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
    //这里存放数据
      return {
        bscroll:null,
      };
    },
    //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
    watch: {},
//方法集合
    methods: {
      btnClick(){
        console.log('111');        
      }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      // 默认情况下BScroll不检测滚动
      this.bscroll = new BScroll(document.querySelector('.wrapper'),{
        // 0和1不侦测,2侦测手指位置，3滚动过程都侦测
        probeType: 3,
        click:true,
        pullUpLoad:true,
        bounce: {
          top: true,
          bottom: true,
          left: true,
          right: true
        }
      }),
      // 检测滚动的位置
      this.bscroll.on('scroll',(position) =>{
        console.log(position);
      })
      // 监听上拉加载更多
      this.bscroll.on('pullingUp',()=>{
        console.log('上拉加载更多');

        setInterval(()=>{  
          //加载更多次  
          this.bscroll.finishPullUp();
        },2000)
      })

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
  .wrapper{
    height: 200px;
    overflow: hidden;
  }
</style>