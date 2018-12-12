// pages/loves/loves.js
import { LoveInfo } from '../../models/loves/loveinfo'
let lovelnfo = new LoveInfo()


import { MyBook } from '../../models/loves/mybook'
let mybook = new MyBook()


const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    LoveList:[],
    Count:''
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    lovelnfo.getDataLatest(res=>{
      // console.log(res)
      this.setData({
        LoveList:res
      })
    }),
      mybook.getDataLatest(res=>{
        // console.log(res)
        this.setData({
          Count:res
        })
      // console.log(this.data.Count)
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

  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})