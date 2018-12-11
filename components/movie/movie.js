// components/movie/movie.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    banner: {
      type: Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    behavior: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    play(ev) {
      console.log(ev)
      let {behavior} = ev.detail
      console.log(behavior)
      if (behavior == true) {
        
      } 
      this.setData({
        behavior: behavior
      })
    }
  }
})