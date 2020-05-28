<!--  -->
<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles"
         :key="index"
         class="tab-control-item"
         :class="{active: index === currentIndex}" 
         @click="onclick(index)">
      <span>
        <b>{{item}}</b>
      </span>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      currentIndex:0,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    onclick(index){
      this.currentIndex = index;
      this.$emit('itemClick',index)
    }
  }
};
</script>

<style>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item span{
  padding:5px;
}
.active{
  color: var(--color-high-text);
}

.active span{
  border-bottom: 2px solid var(--color-high-text);
}
</style>