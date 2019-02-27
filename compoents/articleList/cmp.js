// compoents/articleList/cmp.js
import {ModuelIndex} from "../../module/moduleIndex.js";
import {SearchModel} from "../../module/search"
var searchModel=new SearchModel();

const moduelIndex=new ModuelIndex();

Component({
  /**
   * 组件的属性列表
   */
  properties: {
      articleList:Array,
      magazineId:{
        type:Number,
        value:0,
        observer(){
            this.data.noMoreData=false;
        }
      },
      more:{
        type:String,
        value:"",
        observer(newvalue,oldvalue){
            this.getMoreData();
        } //more的值改变一次observer执行一次
      },
      from:String,
      word:String,
      

  },

  /**
   * 组件的初始数据
   */
  data: {
      loading:false,
      noMoreData:false,
  },
  attached(){
    var curpages=getCurrentPages();//获取页面信息的函数
    var index=curpages.length-1;
    if(curpages[index].route=="pages/search/search"){//判断是search页面还是index页面，每个页面获取的数据不一样
        this.setData({
          from:'search'
        })
    }else{
      this.setData({
        from:'index',
      })
    }
  },  

  /**
   * 组件的方法列表
   */
  methods: {
      getMoreData(){      //在observer中调用
        if(this.data.loading||this.data.noMoreData){
            return;
        } //设置锁，避免网不好的时候重复加载相同的数据
        this.setData({
          loading:true,
        })

        var magazineId=this.properties.magazineId;
        var start=this.properties.articleList.length;
        if(this.properties.from=="index"){
          moduelIndex.getArticleList(magazineId,start).then(res=>{
            console.log(res);
            var combineList=this.properties.articleList.concat(res);
  
            if(combineList.length==start){    //判断下拉加载页面时数据是否请求完全
              this.setData({
                noMoreData:true,
                loading:false
              })
            } 
            this.setData({
              articleList:combineList,
              
            })
          })
        }else{
          var word=this.properties.word;    //word是从search页面中传进来的
          searchModel.getSearchArticeList(word,start).then(res=>{
            var combineList=this.properties.articleList.concat(res);
  
            if(combineList.length==start){    //判断下拉加载页面时数据是否请求完全
              this.setData({
                noMoreData:true,
                loading:false
              })
            }
            this.setData({
              articleList:combineList,
              
            })
          })
        }
        
      }
  }
})
