export default {
  cartCount(state, getters) {
    return state.cartList.length
  },
  cartList(state){
    return state.cartList
  }
}