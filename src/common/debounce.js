export function debounce(func,delay){
  let timer = null
  return function(...args){
    if(timer)clearTimeout(timer)
    timer = setTimeout(()=>{
      func.apply(this,args)
    },delay)
  }
}
// 防抖
// func传入函数
// delay时间