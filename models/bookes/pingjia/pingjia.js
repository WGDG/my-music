import { HTTP } from '../../../utils/http.js'

class PingjiaModel extends HTTP {
  Pingjia(id,callback){
    let ids = id
    // console.log(ids)
    this.request({
      url: '/book/' +ids +'/short_comment',
      success(res) {
        callback(res)
      }
    })
  }
}
export { PingjiaModel }