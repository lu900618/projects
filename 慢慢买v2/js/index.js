$(function () {

  var indexPage = new Page()
  indexPage.loadIndexMenu(data => {
    let html = template('menuTpl', data)
    $('#menu ul').html(html)
  })

  var page = 1
  var totalPage
  indexPage.getMoneyCtrl((data, page) => {
    console.log(data)
    let html = template('recommendListTpl', data)
    $('#recommend ul').append(html)
    totalPage = Math.ceil(data.totalCount / data.pagesize)
    console.log(totalPage)
  })

  // tap 事件: 需要添加插件 (编译)
  $('#menu ul').on('tap', 'li:nth-child(8)', () => {
    $('#menu ul li:nth-last-child(-n+4)').toggle()
  })

  $('.recommend-more a').off('tap')
  $('.recommend-more a').on('tap', () => {
    page++
    if (page >= totalPage) {
      return
    }
    indexPage.getMoneyCtrl(data => {
      let html = template('recommendListTpl', data)
      $('#recommend ul').append(html)
    }, page)
  })
})


  // // 加载前5条数据
  // splitData(dataList => {
  //   data2Html(dataList)
  // })


  // // window.onscroll = lazyload
  // $(window).on('swipe', () => {
  //   console.log('swipe')
  //   let part = 1
  //   let top = $('#recommend ul li:last-child').prev().offset().top
  //   let docScrollTop = window.pageYOffset

  //   splitData(dataList => {
  //     if (($('#recommend ul').attr('load') === 'false') && (top - docScrollTop <= 600) && (part < Object.keys(dataList).length)) {
  //       $('#recommend ul').attr('load', true)
  //       part++
  //       data2Html(dataList, part)
  //     }
  //   })
  // })
// })



// function data2Html (data, part) {
//   part = part || 0
//   let partData = data['part' + part]
//   // console.log({ result: partData })
//   let html = template('recommendListTpl', { result: partData })
//   $('#recommend ul').append(html)
//   $('#recommend ul').attr('load', false)
// }

// function splitData (callback) {
//   var dataList = {}
//   // 获取省钱控数据
//   getMoneyCtrl(data => {
//     // console.log(data)
//     let tmpArr = data.result
//     for (let i = 0, len = tmpArr.length, k = 0; i < len; i = i + 5, k++) {
//       dataList['part' + k] = tmpArr.slice(i, i + 5)
//     }
//     callback(dataList)
//   })
// }