import { HTTP } from '../utils/http.js'

class BookesModel extends HTTP {
  getDataLatest(callback) {
    this.request({
      url: 'book/hot_list',
      success(res) {
        callback(res)
      }
    })
  }
}

export { BookesModel }