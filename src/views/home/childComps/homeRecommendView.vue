<!-- 推荐栏 -->
<template>
  <div id="recommend">
    <div v-for="(item,index) in recommend" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="推荐栏图片">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

  export default {
    name:'',
    props:{
      recommend:{
        type: Array,
        default: []
      }
    },
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
    //这里存放数据
      return {

      };
    },
  }
</script>

<style>
  #recommend{
    display: flex;
    width:100%;
    padding: 5px 0 15px;
  }

  .recommend-item{
    flex:1;
    text-align: center;
    font-size: 12px;
  }

  .recommend-item img{
    width:85%;
    margin-bottom: 5px;
  }
</style>