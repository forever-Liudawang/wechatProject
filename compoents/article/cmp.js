// compoents/article/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
        articleDetail:Object,
  },

  /**
   * 组件的初始数据
   */
  data: {
      likeStatus:false
  },
  attached(){
    var data=this.properties.articleDetail;
    var artId=data.artId;
    var likeList=wx.getStorageSync('likeList')||[];
    var likeStatus=false;
    var that=this;
    likeList.forEach(function(item,index){
      if(item.artId==artId){
            console.log(22)
           that.setData({
             likeStatus:true
           })
            
      }
    })

  },

  /**
   * 组件的方法列表
   */
  methods: {
      onLike(e){
          var likeflag=e.detail.likeFlag;//获取从d-like页面中传过来的likeflag值
          var data=this.properties.articleDetail;
          var artId=data.artId;
          var likeList=wx.getStorageSync('likeList')||[];//获取缓存
          if(likeflag){//用于判断用户是喜欢还是不喜欢
            likeList.unshift(data);
            wx.setStorageSync('likeList',likeList)//设置缓存
          }else{
            likeList.forEach(function(item,index){
              if(item.artId==artId){//找到与用户点击项相对应的缓存数据
                likeList.splice(index,1);//从缓存列表中移除缓存数据
              }
            })
          }
          wx.setStorageSync('likeList',likeList)
      }
  }
})
