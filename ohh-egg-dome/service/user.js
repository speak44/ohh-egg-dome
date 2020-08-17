const delay = (data, tick)=> new Promise (resolve => {
  setTimeout(()=>{
    resolve(data)
  },tick)
})


module.exports = app=>({
  getName(){
    // return delay('ohh', 1000)
    return app.$model.user.findAll()
  },
  getAge(){
      return 18
  }
})