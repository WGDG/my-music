// components/search/info/info.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    Hot:{
      type:Object
    },
    books: {
      type: Array
    }
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
    infoDetail(ev){
      console.log(ev)
      let {id} = ev.currentTarget.dataset
      wx.navigateTo({
        url: '../../pages/BookesDetail/detail?id=' + id,
      })
    
    }
  }
})
