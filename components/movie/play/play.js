// components/movie/play/play.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    inner: {
      type: Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    play: '../images/play.png',
    stop: '../images/stop.png',
    autoPlay: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
      play(ev){
        console.log(this)
        const BackgroundAudioManager = wx.getBackgroundAudioManager()
        if(this.data.autoPlay === false) {
          let { url, title, image } = this.data.inner
          BackgroundAudioManager.title = title
          BackgroundAudioManager.coverImgUrl = image
          BackgroundAudioManager.src = url
          BackgroundAudioManager.play()
          BackgroundAudioManager.onPlay(() => {
            this.setData({
              autoPlay: true
            })
            if (this.data.inner.url === BackgroundAudioManager.src) {
              console.log('Aa')
              this.setData({
                autoPlay: true
              })
              let behavior = this.data.autoPlay
              this.triggerEvent('music', {
                behavior,
              }, {})
            }
          })
        }else {
          this.setData({
            autoPlay: false
          })
          if(this.data.autoPlay === false){
            BackgroundAudioManager.pause()
            BackgroundAudioManager.onPause(() => {
              console.log('播放暂停')
              this.setData({
                autoPlay: false
              })
              let behavior = this.data.autoPlay
              this.triggerEvent('music', {
                behavior,
              }, {})
            })
            
          }
          let behavior = this.data.autoPlay
          this.triggerEvent('music', {
            behavior,
          }, {})
        } 
  
        
      }
  }
})
