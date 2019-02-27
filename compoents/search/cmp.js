// compoents/search/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      value:String
  },

  /**
   * 组件的初始数据
   */
  data: {
      value:"",
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onSearch(){
      if(this.data.value==""||this.data.value!=="读书"){
        wx.showToast({
          title:"不好意思只能搜索读书哦",
          icon:"none",
        })
      }else{
        var val=this.data.value;
        console.log(val)
        wx.navigateTo({
          url:"/pages/search/search?value="+val,
        })
      }
    },
    onInput(e){
        var value=e.detail.value;
        this.setData({
          value:value,
        })
    }
  }
})
