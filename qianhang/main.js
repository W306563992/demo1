let qianhangContent = JSON.parse(localStorage.getItem("qianhangContent"))
if (!qianhangContent){qianhangContent = []}
let $addButton = $('.addButton')
let $listContent = $('#listContent')
// 获得了qianhangContent之后需要渲染页面
render()
function render(){
    // 渲染之前需要吧listContent 清空
    $listContent.find('li:not(.addButton)').remove()
    qianhangContent.forEach((item,index)=>{
        // 添加网站列表
        let $li = $(`
        <li class="toSite">      
             <div class="cancel">X</div>
            <div class="siteName">${item.site[8].toUpperCase()}</div>
            <div class="site">${item.site.substring(8)}</div>
     </li>`)
        $addButton.before($li)
        //给li添加点击事件
        $li.on('click',(e)=>{
            e.stopPropagation()
            window.open(item.site)
        })

          // 点击X就删除标签
      $li.find('.cancel').click(function(e){
        e.stopPropagation()
        qianhangContent.splice(index,1)
        console.log(qianhangContent)
        render() 
    })
    })
}

$addButton.on('click',(e)=> {
   let site = window.prompt('请输入要添加的网址')
   if (site){
    site= 'https://'+site
    let siteitem = ({"site":site,"img":''})
    
    qianhangContent.push(siteitem)
    localStorage.setItem('qianhangContent',JSON.stringify(qianhangContent))
    render()
    e.stopPropagation()
   }
  })

window.onbeforeunload = ()=>{
    localStorage.setItem("qianhangContent",JSON.stringify(qianhangContent))
}