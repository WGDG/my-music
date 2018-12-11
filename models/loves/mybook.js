import { HTTP } from '../../utils/http.js'

class MyBook extends HTTP {
  getDataLatest(callback) {
    this.request({
      url: 'book/favor/count',
      success(res) {
        callback(res)
      }
    })
  }
}

export { MyBook }