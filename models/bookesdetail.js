import { HTTP } from '../utils/http.js'

class BookesDetail extends HTTP {
  Bookes(id,callback){
    let ids = id
    // console.log(ids)
    this.request({
      url: '/book/ ' + ids + '/detail',
      success(res) {
        callback(res)
      }
    })
  }

}

export { BookesDetail }