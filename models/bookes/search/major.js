
import { HTTP } from '../../../utils/http.js'

class MajorModel extends HTTP {
  getDataLatest(callback) {
    this.request({
      url: '/book/hot_keyword',
      success(res) {
        callback(res)
      }
    })
  }
}
export { MajorModel }