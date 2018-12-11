import { HTTP } from '../../utils/http.js'

class LoveInfo extends HTTP {
  getDataLatest(callback) {
    this.request({
      url: 'classic/favor',
      success(res) {
        callback(res)
      }
    })
  }
}

export { LoveInfo }