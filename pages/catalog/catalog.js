// pages/catalog/catalog.js
import {tagInfoList} from "../../utils/tagList"
import {transferDataModel} from "../../module/transferDataModel.js"
var transferRun=new transferDataModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      tagListData:tagInfoList,
      markList:[],
      returnValue:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData();
  },
  onShow:function(){    //切记如果自定义onshow事件一定要把下面的onshow事件注释，否则不生效，血的教训
    this.setData({
      returnValue:"",
    })
  },

  getData(){
    var markList=transferRun.getTagList()
    console.log(markList)
    this.setData({
      markList:markList
    })

  },
  DingTap(){
   this.getData();
  },
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