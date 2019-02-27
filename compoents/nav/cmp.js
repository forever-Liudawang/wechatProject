// compoents/nav/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
      navList:["青芒","兴趣","物质","世界","新事","灵魂"],
      activeIn:0,
      activeId:'magazine0'
  },

  /**
   * 组件的方法列表
   */
  methods: {
      navTap(e){
            var index=e.currentTarget.dataset.index;
            var lastIndex=this.data.activeIn;
            this.setData({
              activeIn:index,
              activeId:`magazine${index==0?0:index-1}`
            })
            if(index==lastIndex){
              return ;
            } //为了避免重复点击同一按钮时加载相同的数据
            this.triggerEvent('navClick',{index},{})//手动触发index页面中绑定在nav组件上的navClick事件，并将index传过去
      }
     
  }
})
