<!-- 详情页顶部导航栏 -->
<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="@/assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="titles">
        <div  class="titleItem" 
              :class="{active:index === currentIndex}"
              v-for="(item,index) in titles" 
              :key="index"
              @click="titleItemClick(index)">
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
  import NavBar from "@/components/commen/navbar/NavBar.vue"
  
  export default {
    name:'DetailNavBar',
    //import引入的组件需要注入到对象中才能使用
    components: {
      NavBar
    },
    props:{
      currentIndex:0,
    },
    data() {
    //这里存放数据
      return {
        titles:[
          '商品','参数','评论','推荐'
        ],
      };
    },
  //方法集合
    methods: {
      titleItemClick(index){
        this.currentIndex=index;

        this.$emit('titleClick',index);
      },
      backClick(){
        this.$router.go(-1)
      }
    },
  }
</script>

<style scoped>
  .titles{
    display: flex;
  }
  .titleItem{
    flex: 1;
    font-size: 13px;
  }
  .active{
    color: var(--color-high-text);
  }
  .back img{
    margin-top: 13px;
  }
</style>