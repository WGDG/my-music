import { HTTP } from '../utils/http.js'

class BookesDetail extends HTTP {
  Bookes(id,callback){
    this.request({
      url: '/book/ ' + id + '/detail',
      success(res) {
        callback(res)
      }
    })
  }

}

export { BookesDetail }