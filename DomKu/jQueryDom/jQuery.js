window.jqMe = function (selector){
    let api 
    if(selector instanceof Array) {
        console.log('是数组')
        api = selector
        
    }else{
        console.log('不是数组')
        api = document.querySelectorAll(selector)
    }
return  {
    oldApi: selector.oldApi,
    addClass(className) {
        for (let i = 0 ; i < api.length ; i ++){
            api[i].classList.add(className)
        }
        return this
    },
    find(selector) {
        let arr= []
        for(let i = 0 ; i < api.length; i++){
            console.log(api[i].querySelectorAll(selector))
            arr = arr.concat(Array.from(api[i].querySelectorAll(selector)))
        }
        arr.oldApi = this
        return jqMe(arr)
    },
    // 返回上一个操作的api
    end(){
        return this.oldApi;
    },
    // 遍历当前所有元素
    each(fn){
        for(let i = 0 ; i < api.length; i ++){
            fn.call(null, api[i],i) // 实际参数，传递出去！
        }
        return this; //返回当前api
    },
    // 找到当前元素的父亲
    parent(){
        let arrParent =[]
        this.each((node)=>{arrParent.push(node.parentNode)}) // 形式参数
        console.log('++++++'+arrParent)
        return jqMe(arrParent)
    }
}
}