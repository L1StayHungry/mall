<template>
  <div class="recommend-info">
    <div class="info-header">热门推荐</div>
    <good-list :goods="recommendList"></good-list>
  </div>
</template>

<script>
  import GoodList from '@/components/content/goods/GoodList'
  import GoodsListItem from '@/components/content/goods/GoodListItem.vue'

	export default {
		name: "DetailRecommendInfo",
    components: {
		  GoodList,
      GoodsListItem
    },
    props: {
		  recommendList: {
		    type: Array
      }
    }
	}
</script>

<style scoped>
  .recommend-info {
    padding: 5px;
  }

  .info-header {
    line-height: 40px;
    padding-left: 8px;
    font-size: 15px;
    color: #333;
  }
</style>
