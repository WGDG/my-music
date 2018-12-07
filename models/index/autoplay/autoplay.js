import { HTTP } from '../../../utils/http.js'

class AutoPlay extends HTTP {
  getDataNext(index,callback) {
    this.request({
      url: '/classic/' + index + '/next',
      success(res) {
        callback(res)
      }
    })
  }
  getDataPrev(index, callback) {
    this.request({
      url: '/classic/'+ index +'/previous',
      success(res) {
        callback(res)
      }
    })
  }
}
export { AutoPlay }