import { HTTP } from '../../utils/http.js'

class IndexModel extends HTTP {
  getDataLatest(callback) {
    this.request({
      url: 'classic/latest',
      success(res) {
        let _getkey = `classc-${res.index}`
        wx.setStorageSync(_getkey, res)
        callback(res)
      }
    })
  }

}
export { IndexModel }