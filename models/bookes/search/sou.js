import { HTTP } from '../../../utils/http.js'

class SearchModel extends HTTP {
  Sousuo(value,callback) {
    
    this.request({
      url: '/book/search?q='+ value,
      success(res) {
        callback(res)
      }
    })
  }
}
export { SearchModel }
