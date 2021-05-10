// pages/home/home.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    dh:[],
    lc:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // 轮播
    app.http.banner().then((res) => {
      // console.log(res.data.message);
      this.setData({
        list: res.data.message
      })
    })

    // nav
    app.http.nav().then((res) => {
      let { message} = res.data
      // console.log(message);
      this.setData({
        dh:message
      })
    })

    // 楼层
    app.http.lc().then((res)=>{
      let {message} =res.data
      this.setData({
        lc:message
      })
      // console.log(this.data.lc)

    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})