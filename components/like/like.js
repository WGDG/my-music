// components/like/lik e.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    count: {
      type: Number
    },
    like: {
      type: Boolean
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    yeslike: 'images/xin-1.png',
    nolike: 'images/xin.png',
    like: true,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onlike: function () {
      let {count} = this.properties
      let { like } = this.properties
      count = like ? count - 1 : count + 1
      this.setData({
        count,
        like: !like
      })
      let behavior = like ? 'cancel' : 'like'
      this.triggerEvent('like', {
        behavior
      }, {})
    }
  }
})
