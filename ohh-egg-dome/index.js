// const app = new(require('koa'))()
// const {initRouter} = require('./ohh-loader')
// app.use(initRouter().routes())
// app.listen(7001)


const ohh =require('./ohh')
const app =new ohh()
app.start(7001)
