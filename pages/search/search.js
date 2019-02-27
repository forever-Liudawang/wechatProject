// pages/search/search.js
import {SearchModel} from "../../module/search"
import {random} from "../../utils/randomStr.js"
var searchModel=new SearchModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tag:"",
    recommendData:"",
    articleData:"",
    more:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var val=options.value
      console.log(val)
      this.setData({
        val
      })
      this.getData(val)
  },
  getData(word){
      var recommendData=searchModel.getSearchRecommend(word);
      var articleData=searchModel.getSearchArticeList(word);
      var that=this;
      Promise.all([recommendData,articleData]).then(function(res){
        console.log(res)
        that.setData({
            tag:res[0].tag,
            recommendData:res[0].recommend,
            articleData:res[1],
        })
      })
  },
  onReachBottom(){
      this.setData({
        more:random(10),//改变more的值，触发properties中的more属性的observer的执行
      })
  }
 

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  // onReady: function () {

  // },

  // /**
  //  * 生命周期函数--监听页面显示
  //  */
  // onShow: function () {

  // },

  // /**
  //  * 生命周期函数--监听页面隐藏
  //  */
  // onHide: function () {

  // },

  // /**
  //  * 生命周期函数--监听页面卸载
  //  */
  // onUnload: function () {

  // },

  // /**
  //  * 页面相关事件处理函数--监听用户下拉动作
  //  */
  // onPullDownRefresh: function () {

  // },

  // /**
  //  * 页面上拉触底事件的处理函数
  //  */
  // onReachBottom: function () {

  // },

  // /**
  //  * 用户点击右上角分享
  //  */
  // onShareAppMessage: function () {

  // }
})