let qianhangContent = JSON.parse(localStorage.getItem("qianhangContent"))
if (!qianhangContent){qianhangContent = []}
let listContent = $('#listContent')
let addButton = $('.addButton')
// 获得了qianhangContent之后需要渲染页面
qianhangContent.forEach((item,i)=>{
    render(item)
})
function render(item){
    addButton.before(`
    <a  href="${item.site}">
   <li>      
       <div class="siteName">${item.site[8]}</div>
       <div class="site">${item.site.substring(8)}</div>
</li>
   </a>
`)
}
addButton.on('click',()=>{
   let site = window.prompt('请输入要添加的网址')
   site= 'https://'+site
   let siteitem = ({"site":site,"img":''})
   render(siteitem)
   qianhangContent.push(siteitem)
localStorage.setItem('qianhangContent',JSON.stringify(qianhangContent))
})
// 当离开页面的时候，更新localStorage

