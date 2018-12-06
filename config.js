// // 第一种写法， 逐个导出
// export const config = {
//   api_base_url: 'https://www.easy-mock.com/mock/5baee76d23b8f87ee1b5a88f/test/',
//   appKey: 'fdsfwer23434'
// }

// // 第一种写法，逐个导出
// export let func1 = function() {

// }


// 第二种写法，一起导出
// 全局配置
const config = {
  api_base_url: 'http://jy.haoyunyun.cn',
  appKey: 'fsdfsdf42434'
}
let func1 = function () {
}
// 第二种写法，一起导出
export { config, func1 }
// 改名字
// export { config as config1, func1 }

// config = 1 // 报错 常量只会去判断内存地址是否改变了，如果变了就会报错
// config.appKey = 1 //不会报错，因为我再修改的时候并未修改常量的内存地址