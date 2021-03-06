// components/autoplay/autoplay.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    autoplayTitle: {
      type: String
    },
    content: {
      type: String
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
    next: function () {
      this.triggerEvent('onnext',{
        "xxx":"下一个"
      },{})
    },
    prev: function () {
      this.triggerEvent('prev', {
        "xxx": "上一个"
      },{})
    },
  }
})
