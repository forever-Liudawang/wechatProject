// compoents/dingyue/cmp.js
import {transferDataModel} from "../../module/transferDataModel.js"
var transferData =new transferDataModel();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      tag:String,
      tagId:String
  },

  /**
   * 组件的初始数据
   */
  data: {
      status:'common'
  },

  /**
   * 组件的方法列表
   */
  attached(){
    this.judge();
  },
  methods: {
      Tap(){
        var markObj={
          tag:this.properties.tag,
          tagId:this.properties.tagId,
        }

          if(this.data.status=='common'){
              var markList= transferData.getTagList();
              console.log(markList);
              markList.push(markObj);
              transferData.setTagList(markList);

              this.setData({
                status:'active'
              })
          }else{
            var tagId=this.properties.tagId
            transferData.removeTag(tagId);
            this.setData({
              status:'common'
            })
          }
          this.triggerEvent('tap')
      },
      judge(){
        var markList=transferData.getTagList();
        var that=this;
        markList.forEach(function(item,index){
          if(item.tagId==that.properties.tagId){
            that.setData({
              status:'active'
            })
          }
        })
      }
  }
})
