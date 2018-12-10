// pages/BookesDetail/detail.js
import { BookesDetail } from '../../models/bookesdetail.js'
let bookesdetail = new BookesDetail()

import { PingjiaModel } from '../../models/bookes/pingjia/pingjia.js'
let pingjia = new PingjiaModel()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    Bookesdetail:[],
    comments: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
     let id = options.id
    //console.log(id)
    bookesdetail.Bookes(id,res=>{
    //  console.log(res)
      this.setData({
        Bookesdetail:res
      })
    })
      pingjia.Pingjia(id, res=> {
        // console.log(res)
        this.setData({
          comments: res.comments
        })
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
  

})