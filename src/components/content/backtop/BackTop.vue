<!-- 返回顶部 -->
<template>
  <div class="back-top">
      <img src="@/assets/img/common/top.png" alt="">
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

  export default {
    name:'BackTop',
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
    //这里存放数据
      return {

      };
    },
    methods: {
    },
  }
</script>

<style scoped>
  .back-top{
    position:fixed;
    right: 10px;
    bottom: 55px;
  }

  .back-top img{
    width: 43px;
    height: 43px;
  }
</style>