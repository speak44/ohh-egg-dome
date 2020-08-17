module.exports= app => ({
 'get /': app.$ctrl.home.index,
  'get /detail': app.$ctrl.home.detail
})
// 将对象转化成=> 对象工厂