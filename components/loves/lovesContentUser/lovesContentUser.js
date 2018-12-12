// components/loves/lovesContentUser/lovesContentUser.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    Count:{
      type:Number
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    backgroundImage: './images/background.png',
    avatarUrl: '',
    nickName: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onGotUserInfo(e){
      let { avatarUrl, nickName } = e.detail.userInfo
      this.setData({
        avatarUrl: avatarUrl,
        nickName: nickName
      })
    }
  }
})
