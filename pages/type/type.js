// pages/type/type.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      list:['男性穿搭','个性张扬','时光不老','志趣相投','风华绝代','绝处逢生','百看不厌','孤独终老'],
      dayList:['1天前','2天前','3天前','4天前','5天前','6天前','7天前','8天前','9天前','10天前']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var Ind=options.typeId||options.tagId;
    var that=this;
    this.setData({
      index:Ind,
     })
    wx.request({

      url:'https://easy-mock.com/mock/5bb8c1c63ccc501a316e3ccb/magazine/home',
      success:function(res){
        console.log(res);
        that.setData({
          recommend:res.data.recommend.date,
          title:res.data.recommend.title,
          imgsrc:res.data.recommend.imgSrc,
          markType:res.data.markType,
          articleList:res.data.articleList,
        })

      }
    })
  },


  articleClick:function(e){
    var id=e.currentTarget.dataset.articleid;
    wx.navigateTo({
      url:'/pages/articleDetail/articeDetail?id='+id,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})