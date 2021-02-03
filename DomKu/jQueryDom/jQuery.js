window.jqMe = function (selector){
    // selector 有可能是1.选择器 2.数组 3.Dom元素
    let elements 
   if (typeof selector ==='string') {
    elements = document.querySelectorAll(selector)
   } else {
    elements = selector
   }
   jqMe.prototype = {
    addClass(className) {
        for (let i = 0 ; i < elements.length ; i ++){
            elements[i].classList.add(className)
        }
        return this
    },
    find(selector) {
        let arr= []
        for(let i = 0 ; i < elements.length; i++){
            // console.log(elements[i].querySelectorAll(selector))
            arr = arr.concat(Array.from(elements[i].querySelectorAll(selector)))
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
        for(let i = 0 ; i < elements.length; i ++){
            fn.call(null, elements[i],i) // 实际参数，传递出去！
        }
        return this; //返回当前api
    },
    // 找到当前元素的父亲
    parent(){
        let arrParent =[]
        this.each((node)=>{arrParent.push(node.parentNode)}) // 形式参数
        console.log('++++++'+arrParent)
        return jqMe(arrParent)
    },
    //获取第几个Dom元素
    get(number) {
        return elements[number-1]
    },
    // 找到自己的兄弟，同一节点的后面一个
    next(){
        // 因为存在多个节点，所以也要循环
        let nextList= []
        this.each( node =>{nextList.push(node.nextElementSibling)})
        return nextList
    },
    // 找到自己的兄弟，同一节点的前面一个
    prev(){
        let prevArray = []
        this.each(node =>{prevArray.push(node.previousElementSibling)})
        return prevArray
    }
   }
   let api = Object.create(jqMe.prototype)
   Object.assign(api,{
       oldApi: selector.oldApi
   })
return api
}