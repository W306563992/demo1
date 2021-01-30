// 排序的算法
// 快速排序
function quickSort(left,right) {
    let i,j,tempt
    if (left>right) return
    tempt= a[left] // tempt就是基准数
    i = left
    j = right
    while(i!=j){
        //先从右往左找，找不到就下一个，直到找到比基准数小的数
        while(a[j]>=tempt && i<j)j--
        //j 找到之后，再从左往右找
        while(a[i]<=tempt && i<j) i++
        //找到之后，交换位置
        if (i<j){
            t = a[i]
            a[i]=a[j]
            a[j]= t 
        }
    }
    //准基数归位
    a[left] = a[i]
    a[i] = tempt
    // 用递归的方法继续排序
    quickSort(left,i-1)
    quickSort(i+1,right)
}
//归并排序法
function guibin(a){
    let k = a.length
    if(k === 1) return a
    let left = a.slice(0,Math.floor(k/2))
    let right = a.slice(Math.floor((k/2)))
    return merge(guibin(left),guibin(right))

}
function merge(a,b){
    if(a.length === 0) return b
    if (b.length ===0) return a
    return a[0] >b[0] ? [b[0]].concat(merge(a,b.slice(1))):
    [a[0]].concat(merge(a.slice(1),b))
}
var a = [2,1,0,3,4,7,6,5,8,9]
// 快速排序
quickSort(0,a.length-1)
console.log(a)
//归并排序发
a = [2,1,0,3,4,7,6,5,8,9]
console.log(guibin(a))
