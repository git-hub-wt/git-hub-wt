const evn = require('../env/index.js')
const api = require('./api')
const fetch = require('./fetch')


//确定开发环境
let baseUrl = evn.Dev.BaseUrl;
//如果接口需要token鉴权，获取token
let token = wx.getStorageSync('token');

//轮播请求函数
function banner() {
  return fetch(baseUrl + api.lbt, 'get', {})
}
// 导航请求函数
function nav() {
  return fetch(baseUrl + api.nav, 'get', {})
}
// 楼层请求函数
function lc() {
  return fetch(baseUrl + api.lc, 'get', {})
}

// 分类请求函数
function fl() {
  return fetch(baseUrl + api.fl, 'get', {})
}
//list列表函数

//分类接口函数

module.exports = {
  banner,
  nav,
  lc,
  fl,
}

