<!-- Toast的普通封装 -->
<template>
  <div class="toast" v-show="ifShow">
    <div>
      {{message}}
    </div>
  </div>
</template>

<script>

  export default {
    name:'Toast',
    data() {
      return {
        message: '',
        ifShow: false
      }
    },
    methods: {
      show(message='默认文字',duration=2000){
        this.ifShow = true;
        this.message = message;
        setTimeout(()=>{
          this.ifShow=false;
          this.message='';
        },duration)
      }
    },
    created() {},
    mounted() {
      console.log('`````');
      console.log(this);
    },
  }
</script>

<style scoped>
  .toast{
    position: fixed;
    top: 50%;
    left:50%;
    transform: translate(-50%,-50%);
    padding: 8px 10px;
    border-radius: 8px;

    z-index:999;

    color: white;
    background-color: rgba(0, 0, 0, .5)
  }
</style>
