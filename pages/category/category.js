// pages/category/category.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 接口返回数据
    fl:[],
    // 左边数据
    left_sj:[],
    // 右边数据
    right_sj:[],
    indexs:0,
    goods:[]
  },
addlist(e){
  // console.log(e)
  // console.log(e)
  let index = e.currentTarget.dataset.index
  // console.log(index)
  // console.log(index)
  let good = this.data.fl[index].children
  // console.log(good)
  // console.log(good)
  this.setData({
    indexs:index,
    goods:good
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 分类
    app.http.fl().then((res)=>{
      let {message}=res.data
      this.setData({
         fl:message
      })

        //  构造左边的数据
        let left_sj = this.data.fl.map(v=>v.cat_name)

        // console.log(left_sj)

        // 构造右边的商品数据
        let right_sj = this.data.fl[0].children
        this.setData({
          left_sj,
          right_sj
        })
      // console.log(this.data.fl)
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