// components/footer/footer.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
   
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    Books(){
      wx.navigateTo({
        url: '../../pages/books/books',
      })
    },
    Love() {
      wx.navigateTo({
        url: '../../pages/loves/loves',
      })
    },
  }
})
