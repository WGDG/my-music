import { HTTP } from '../../../utils/http.js'

class SearchModel extends HTTP {
  Sousuo(name,callback) {
    let q = name
    // console.log(q)
    this.request({
      url: '/book/search?q='+ q,
      success(res) {
        callback(res)
      }
    })
  }
}
export { SearchModel }
