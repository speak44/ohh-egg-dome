module.exports =app =>{
  const {STRING} = app.Sequelize;

  const User = app.model.define(
    "product",
    {name: STRING(30)},
    {timestamps:false}
  );
    // 数据库同步，为了强制同步，在应用是不会这么操作，debugger用的
    // 希望加载模型的时候，自动同步
  User.sync({force: true})
  return User
}