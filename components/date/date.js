// components/date/date.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: {
      type: Number,
      observer(newVal, oldVel, changedPath) {
          console.log(newVal)
          console.log(oldVel)
          console.log(changedPath)
          let val = newVal < '10' ? '0' + newVal : newVal
          this.setData({
            _index: val
          })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    _index: '',
    month: '',
    years: '',
    months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
  },

  /**
   * 组件的方法列表
   */
  methods: {
     
  },
  attached () {
    let date = new Date;
    let month = date.getMonth();
    let year = date.getFullYear(); 
    this.setData({
      month: this.data.months[month],
      years: year
    })
  }
})
