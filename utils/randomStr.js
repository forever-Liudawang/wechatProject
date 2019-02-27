var random=function(n){
    var str="";
    for(var i=0;i<n;i++){
        var num=Math.floor(65+Math.random()*25)
        str+=String.fromCharCode(num);
    }
    return str;
}
export{random}