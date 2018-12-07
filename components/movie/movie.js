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
        }else if(newVal === 200) {
          this.setData({
            label: '音乐'
          })
        }else if(newVal === 300 ) {
          this.setData({
            label: '句子'
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
