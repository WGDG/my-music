// components/movie/movie.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    banner:{
      type:String
    },
    typeTitle: {
      type: Number,
       observer(newVal, oldVel, changedPath) {
        if(newVal === 100) {
          this.setData({
            label : '电影'
          })
        }
      }
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    label: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
  
})
