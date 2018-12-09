import { HTTP } from '../../../utils/http.js'

class AutoPlay extends HTTP {
  getDataNext(index,callback) {
    let _getkey = `classc-${index + 1}`
    let classic = wx.getStorageSync(_getkey)
    if(!classic) {
      this.request({
        url: '/classic/' + index + '/next',
        success(res) {
          console.log('上一页请求了接口')
          wx.setStorageSync(_getkey, res)
          callback(res)
        }
      }) 
    }else{
      callback(classic)
    }    
  }
  getDataPrev(index, callback) {
    let _getkey = `classc-${index - 1}`
    let classic = wx.getStorageSync(_getkey)
    if (!classic) {
      this.request({
        url: '/classic/' + index + '/previous',
        success(res) {
          wx.setStorageSync(_getkey, res)
          console.log('下一页请求了接口')
          callback(res)
        }
      })
    } else {
      callback(classic)
    } 
  }
}
export { AutoPlay }