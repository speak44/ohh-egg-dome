const {STRING} = require("sequelize");
// 新建数据库模型
module.exprots={
  schema:{
    name: STRING(30)
  },
  options:{
    timestamps: false
  }
}