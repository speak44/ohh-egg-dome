/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1596680702808_6666';

  // add your middleware config here
  config.middleware = [];


  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.view = {
    // 当遇到ejs文件结尾的时候，用ejs 模板来进行解析
    mapping: {
      '.html': 'ejs',
    },
  };

  // add your user config here
  // const userConfig = {
  //   sequelize: {
  //     dialect: "mysql",
  //     host: "127.0.0.1",
  //     port: 3306,
  //     username: "root",
  //     password: "example",
  //     database: "ohh"
  //   }
  // };

  return {
    ...config,
    // ...userConfig,
  };
};
