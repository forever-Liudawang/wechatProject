// pages/mark/mark.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      userInfo:{},
      author:false,
      likeList:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.getSetting({   //判断用户是否被授权
       success:function(res){
            if(res.authSetting['scope.userInfo']){
              wx.getUserInfo({    //获取用户信息
                success:function(res){
                  var info=res.userInfo //返回用户的信息包括微信名，头像等等
                  console.log(info);
                   that.setData({
                     userInfo:info,
                     
                   })
                   that.getLike();

                }
              })
            }
        }
    })

  },
  onShow(){
    
   this.getLike();
  },

  getUserInfo:function(e){    //button上绑定的获取用户信息的事件
    console.log(e);
          var info=e.detail.userInfo;
          if(info){
            this.setData({
                userInfo:info,
                author:true,
            })
          }
          this.getLike();
  },
  getLike:function(){ //获取用户点击 喜欢的文章的数据并调用d-article组件进行渲染
    var likeList=wx.getStorageSync('likeList')||[];
    console.log(likeList[0])
    this.setData({
          likeList
    })
  }
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  // onReady: function () {

  // },

  /**
   * 生命周期函数--监听页面显示
   */
  // onShow: function () {

  // },

  /**
   * 生命周期函数--监听页面隐藏
   */
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