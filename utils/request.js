
//wx.request函数的封装
class Request{
    baseUrl="https://easy-mock.com/mock/5bd149fab36f2c5eac3a9274/QM_magazine";
    getData({url,method='GET',data={}}){
        const promise=new Promise((reslove,reject)=>{
            wx.request({
                url:this.baseUrl+url,
                method:method,
                data:data,
                success:res=>{
                    if(res.data.code==0){
                        reslove(res.data.data)
                    }else{
                        this._showError();
                    }

                },
                fail:err=>{
                    reject(err);
                    this._showError();
                }
            })
        })
        return promise;
    }
    _showError(){
        wx.showToast({
            title:"请求错误",
            icon:"none",
        })
    }
}
export{Request};