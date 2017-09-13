$(function () {
  // 加载页面显示
  let moneyCtrlPage = new Page()
  let totalPage = 0
  let page = 1

  showPage(page, (totalPage) => {
    reloadPageNum(page, totalPage)
    showSel(page, totalPage)
  })

  // 页码sel点击事件
  $('#content>.page .sel').on('click', 'li', (e) => {
    // 判断是显示还是点击选取页码
    if ($('#content>.page .sel').attr('show') === 'off') {
      showSel(page, totalPage)
      $('#content>.page .sel li').show()
      $('#content>.page .sel').attr('show', 'on')
    } else {
      $('#content>.page .sel li').hide()
      $(e.target).css('top', 0).show()
      console.log(e.target);
      page = $(e.target).attr('value')
      showPage(page, (totalPage) => {
        reloadPageNum(page, totalPage)
        // showSel(page, totalPage)
      })
      $('#content>.page .sel').attr('show', 'off')
    }
  })



  // 上下页按钮事件
  $('#content>.page button').on('click', (e) => {
    let page = $(e.target).attr('page')
    showPage(page, (totalPage) => {
      reloadPageNum(page, totalPage)
      showSel(page, totalPage)
      $('#content>.page .sel li[value="' + page + '"]').css('top', 0).show()
    })
  })


  // 显示列表页面
  function showPage (page, callback) {
    moneyCtrlPage.getMoneyCtrl(data => {
      console.log(data)
      let html = template('listTpl', data)
      $('#content>ul').html(html)
      totalPage = Math.ceil(data.totalCount / data.pagesize)
      callback(totalPage)
    }, page)
  }

  // 更新上一页 下一页按钮页码
  function reloadPageNum (currPage, totalPage) {
    $('#content>.page div button.prev').attr('page', currPage <= 1 ? 1 : currPage - 1)
    $('#content>.page div button.next').attr('page', currPage >= totalPage ? totalPage : Number(currPage) + 1)
  }

  // 显示下拉框
  function showSel (currPage, totalPage) {
    let optHtml = ''
    for (let i = 1; i <= totalPage; i++) {
      optHtml += ' <li value="' + i + '">' + i + '/' + totalPage + '</li>'
    }
    $('#content>.page .sel ul').html(optHtml)

    let list = $('#content>.page .sel li')

    for (let i = 0, len = list.length; i < len; i++) {
      $('#content>.page .sel li[value="' + (i + 1) + '"]').css('top', -i * 28)
    }

    $('#content>.page .sel li[value="' + currPage + '"]').show()
  }
})
