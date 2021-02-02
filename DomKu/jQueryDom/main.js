const dom = window.jqMe("#box")
// console.log(dom.addClass('hehe')
//                 .addClass('xixi')
//                 .find('.red')
//                 .addClass('yellow')
//                 .end()
//                 .addClass('nini')
// )
dom.each((div)=>{console.log(div)}) // 形式参数
console.log('---------')
console.log(dom.find('.red').parent().addClass('oo'))

