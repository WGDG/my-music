// components/search/header/header.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    Sousuo:{
      type:String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    inputValue:'',
  },

  /**
   * 组件的方法列表
   */
  

  methods: {
    inputValue:function (e) {
      console.log(e)
      let {value} = e.detail
      this.setData({
        inputValue: value
      })
      this.triggerEvent('Sousuo', {
        value
      }, {})
    },
    cancel(){
      wx.navigateTo({
        url: '../../pages/books/books',
      })
    }
  }
})
