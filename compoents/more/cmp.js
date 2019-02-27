// compoents/more/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
        tag:String 
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
      moreTap(){
        var tag=this.properties.tag;
        console.log(tag);
        wx.showActionSheet({
          itemList:["内容过期了",'内容和'+ tag+'不向关','不再显示来自'+ tag+'的内容']
        })
      }
  }
})
