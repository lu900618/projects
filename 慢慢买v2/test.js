// splice
// 作用: 删除数组
// 参数: 1.开始删除的位置 2.删除的个数 3.需要添加的元素
// 返回值: 新数组
// 注意: 1. 原数组会改变 2.开始的位置可以为负数
var arr = [1, 2, 3, 4]
var arr2 = arr.splice(1, 2, 3, 3, 4)
console.log(arr)    // [1, 3, 3, 4, 4]
console.log(arr2)   // [2, 3]
// slice
// 作用: 截取数组
// 参数: 1.开始截取的位置 2.结束截取的位置 -- 不包含
// 返回值: 新数组
// 注意: 原数组不会改变
var arr3 = [1, 2, 3, 4]
var arr4 = arr.slice(1, 2)
console.log(arr3)   // [1, 2, 3, 4]
console.log(arr4)   // [3]

// 可以拷贝数组
var arr5 = arr3.slice()
console.log(arr5)   // [1, 2, 3, 4]
arr3 === arr5       // false






