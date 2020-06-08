
import BackTop from "@/components/content/backtop/BackTop";

export const backTopMixin = {
  data(){
    return {     
      isShowBackTop:false,//返回顶部按钮
    }
  },
  components:{
    BackTop,
  },
  methods: {
    backClick(){
      // 返回顶部
      // 获取组件this.$refs.scroll
      // (x,y,缓存时间)
      this.$refs.scroll.scrollTo(0,0,500)
    },
  },
}