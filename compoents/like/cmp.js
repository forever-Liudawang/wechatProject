// compoents/like/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
        likeFlag:Boolean,
  },

  /**
   * 组件的初始数据
   */
  data: {
      likeFlag:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
        likeTap(){
            var like=!this.data.likeFlag;
            this.setData({
                likeFlag:!this.data.likeFlag,
            })
            this.triggerEvent('like',{
                    likeFlag:like,
            })  //触发绑定在article页面中的d-like组件上的的自定义的like事件并将liekeFlag的值传过去
        }
  }
})
