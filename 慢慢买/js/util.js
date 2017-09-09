// http://www.baidu.com?a=1&b=2
function getId () {
  var res = {}
  var url = window.location.href
  // var url = 'http://www.baidu.com?a=1&b=2'
  var arr = url.split('?')
  var str = arr.length > 1 && arr[1]  || '' // a=1&b=2
  arr = str.split('&')
  arr.forEach(function(item){   
    var tmp = item.split('=')
    res[tmp[0]] = tmp[1] 
  })
  return res
}

