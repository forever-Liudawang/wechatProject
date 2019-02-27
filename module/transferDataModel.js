class transferDataModel{
    setTagList(value){
        wx.setStorageSync('markList',value)
    }
    getTagList(){
       return  wx.getStorageSync('markList')||[];
    }
    removeTag(myTagId){
        var markList= this.getTagList();
        markList.forEach(function(item,index){
            if(item.tagId==myTagId){
              markList.splice(index,1);
            }
      })
      this.setTagList(markList)

    }
}
export {transferDataModel}