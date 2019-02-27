import {Request} from '../utils/request.js'
class ModuelIndex extends Request{
    getArticleList(magazineId=0,start=0){   //设置默认值是为为了页面首次进入时加载数据
        return this.getData({
            url:'/getIndexArticleList/'+magazineId +'/'+start 
        })
    }
    getRecommendInfo(magazineId=0){
        return this.getData({
            url:`/getRecommendInfo/${magazineId}`,
        })
    }
    getMarkTypeList(magazineId=0){
        return this.getData({
            url:`/getMarkTypeList/${magazineId}`,
        })
    }
}
export{ModuelIndex}