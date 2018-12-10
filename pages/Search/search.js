// pages/Search/search.js
import { MajorModel } from '../../models/bookes/search/major.js'
let major = new MajorModel()

import { SearchModel } from '../../models/bookes/search/sou.js'
let search = new SearchModel()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    Hot:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    major.getDataLatest(res=>{
      // console.log(res)
      this.setData({
        Hot:res.hot
      })
      // console.log(this.data.Hot)
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
  
  sousuo(ev){
    // console.log(ev)
    let { name } = ev.detail
    //  console.log(name)
    search.Sousuo(name,res => {
      console.log(res)
    })
  }


})