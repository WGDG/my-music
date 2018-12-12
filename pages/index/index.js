// pages/index/index.js
import { IndexModel } from '../../models/index/index.js'
import { LikeModel } from '../../models/like.js'
import { AutoPlay } from '../../models/index/autoplay/autoplay.js'
let indexModel = new IndexModel()
let likeModel = new LikeModel()
let autoPlayModel = new AutoPlay()
Page({
  onShareAppMessage: function () {
    let that = this;
    return {
      title: '转发给好友', // 转发后 所显示的title
      imageUrl: "pages/loves/loves",
      path: '/pages/index/index', // 相对的路径
      
    }
  },

  
  /**
   * 页面的初始数据
   */
  data: {
    
    Indexheader: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    indexModel.getDataLatest(res => {
      this.setData({
        Indexheader: res,
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
  onlike (ev) {
    let { behavior } = ev.detail
    let { id, type } = this.data.Indexheader
    likeModel.like(behavior, id, type)
  },
  next (ev) {
    console.log(ev)
    let { index } = this.data.Indexheader
    autoPlayModel.getDataNext(index, res => {
      this.setData({
        Indexheader: res
      })
    })
  },
  onprev (ev) {
    let { index } = this.data.Indexheader
    autoPlayModel.getDataPrev(index, res=> {
      this.setData({
        Indexheader: res
      })
    })
  }
})