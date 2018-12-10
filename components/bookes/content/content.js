// components/bookes/content/content.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    Bookes:{
      type: Object
    },
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
    Detail(ev) {
      let id = ev.currentTarget.dataset.id
      // console.log(id)
      wx.navigateTo({
        url: '../../pages/BookesDetail/detail?id=' + id,
      })
      this.triggerEvent('Bookes',{
        id
      },{})
    }
  }
})
