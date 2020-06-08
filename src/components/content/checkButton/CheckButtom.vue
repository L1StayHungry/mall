<!-- 多选、复选 -->
<template>
  <div class="check-buttom" :class="{'check':isChecked}"  @click="selectItem">
    <img src="@/assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>

  export default {
    name:'CheckButtom',
    props:{
      value:{
        type:Boolean,
        default:true,
      }
    },
    components: {
    },
    data() {
      return {
        isChecked: this.value
      }
    },
    computed: {
    },
    watch: {
      value: function (newValue) {
        this.isChecked = newValue;
      }
    },
    methods: {
      selectItem: function () {
        this.$emit('checkBtnClick')
      }
    },
    created() {},
    mounted() {},
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
  .check-buttom{
    border-radius: 50%;
    border:2px solid #aaa;
    width: 20px;
    height: 20px;
  }

  .check-buttom img{
    width: 14px;
    height: 14px;
  }
  .check{
    border-color: var(--color-high-text);
    background-color: var(--color-high-text);
  }
</style>