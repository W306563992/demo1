window.jQuery = function (selector){
    // jQuery 返回的永远都是一个数组，里面有节点，还有函数
    // 里面的孩子也是数组，不管我jQuery("#box")find()也好还是 jQuery("#box")[0].find也好，都可以查
        let dom 
        if( typeof selector ==="string"){
            if (selector[0] == '<'){
                dom = [document.createElement(selector)]
            }else {
                dom = document.querySelectorAll(selector)
               
            } 
            }else {
                dom = selector
            }
            console.log(dom)
    
    return {
        dom: dom,
        find(selectorString){
            let arr = []
            for (let i = 0 ; i < dom.length;i++){
                arr = arr.concat(Array.from(dom[i].querySelectorAll(selectorString)))
            }
            return jQuery(arr)
        },
        // 闭包：函数访问外部的变量
    addClass(className){
        for(let i=0;i<dom.length;i++){
        dom[i].classList.add(className)
        }
        return this
      },
    //   parent(){
    //       let arrParent = []

    //       return dom.parentNode
    //   },
      each(){
          for (let i = 0; i < dom.length; i++) {
              console.log(dom[i])
          }
      }

    }
}