// compoents/video/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
        text:String,
        Imgsrc:String,
        poster:String,
        time:String,
        videoId:String,
  },

  /**
   * 组件的初始数据
   */
  data: {
      showPoster:true,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    circleTap(){
      this.setData({
        showPoster:false
      })
      var id=this.properties.videoId;
     var video= wx.createVideoContext(id,this)
     video.play();
    },
    maskTap(){
      this.setData({
        showPoster:true
      })
      var id=this.properties.videoId;
     var video= wx.createVideoContext(id,this)
     video.seek(0);
     video.stop();
  
    }
  
  }
})
