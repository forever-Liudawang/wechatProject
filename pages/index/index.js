//index.js
//获取应用实例

// import {Request} from "../../utils/request"
// const request=new Request();


import {ModuelIndex} from "../../module/moduleIndex.js"
import {random} from "../../utils/randomStr.js"
const moduelIndex=new ModuelIndex();



const app = getApp()
Page({
  data: {
    articleList:[],
    recommendInfo:[],
    markTypeList:{},
    getMore:'',
    magazineId:0,//用于控制导航标签的切换以及加载对应不同的标签的数据
    loading:true,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {

    // request.getData("/getIndexArticleList/0/0").then(res=>{
    //   console.log(res);
    // })
    

    // request.getData({
    //     url:"/getRecommendInfo/0"
    //   }).then(res=>{
    //   console.log(res);
    // })

    //  request.getData({
    //    url:"/getMarkTypeList/0"
    //   }).then(res=>{
    //   console.log(res);
    // })

    // moduelIndex.getArticleList().then(res=>{
    //   console.log(res);
    // }) 
    // moduelIndex.getRecommendInfo().then(res=>{
    //   console.log(res);
    // }) 

    // moduelIndex.getMarkTypeList().then(res=>{
    //   console.log(res);
    // }) 

    // const getArticleList=moduelIndex.getArticleList();
    // const getRecommendInfo=moduelIndex.getRecommendInfo();
    // const getMarkTypeList=moduelIndex.getMarkTypeList();

    // Promise.all([getArticleList,getRecommendInfo,getMarkTypeList]).then(res=>{
    //   console.log(res);//一次性执行所有的数据请求
    // })  

    this.getData();
    wx.showLoading();
    



  },
  toCatalogClick(){
        wx.switchTab({
          url:"../catalog/catalog"
        })
  },
  navTap(e){
      var id=e.detail.index
      this.getData(id);
      this.setData({    //重置页面数据避免加载下一页面时还是上一页面的数据
        magazineId:id,  //通过控制magazineId的变化控制子路径的变化，达到获取不同的数据的目的
        articleList:[],
        recommendInfo:[],
        markTypeList:{},
        loading:true,
      });
      wx.pageScrollTo({
        scrollTop: 0,
        
      })    //切换不同的导航标签时滚动到页面顶部
  },
  onReachBottom(){
    this.setData({
      getMore:random(20),
    })  //与observer配合使用
  },
  getData(magazineId){
    const getArticleList=moduelIndex.getArticleList(magazineId);
    const getRecommendInfo=moduelIndex.getRecommendInfo(magazineId);
    const getMarkTypeList=moduelIndex.getMarkTypeList(magazineId);

    Promise.all([getArticleList,getRecommendInfo,getMarkTypeList]).then(res=>{
       console.log(res)                         //一次性执行所有的数据请求
      this.setData({
        articleList:res[0],
        recommendInfo:res[1],
        markTypeList:res[2],
      })
      wx.hideLoading();
      this.setData({
        loading:false,  //设置数据加载完成时，loading页面不再显示
      })
    })
  },

})
