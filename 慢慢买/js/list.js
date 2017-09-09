$(function () {
  loadMenu()
  loadList()

})


function loadMenu () {
  var id = getId().categoryid || 0
  $.ajax({
    type: 'get',
    data: { categoryid: id },
    url: url + '/api/getcategorybyid',
    dataType: 'json',
    success: function (data) {
      console.log(data)
      var html = '<a href="/">首页</a>   &gt;'
      html += '<a href="/list.html">全部分类</a>   &gt;'
      html += '<a href="javascript:void(0);" class="cat">' + data.result[0].category + '</a>'
      $('.choose').before(html)
    }
  })
}


function loadList (page) {
  page = page || 1
  var id = getId().categoryid || 0
  $.ajax({
    type: 'get',
    data: {
      categoryid: id,
      pageid: page
    },
    url: url + '/api/getproductlist',
    dataType: 'json',
    success: function (data) {
      console.log(data)
      var html = template('listTpl', data)
      $('#detail-list').html(html)
      // 加载页码
      loadPage(page, Math.ceil(data.totalCount / data.pagesize))
    }
  })
}

function loadPage (page, total) {
  console.log(page, total)
  $('#detail-list').off('click', '.prev')
  $('#detail-list').off('click', '.next')
  $('#detail-list').off('change', 'select')

  $('#detail-list').on('click', '.prev', function () {
    page = page - 1;
    if (page <= 0) {
      page = 1
    }
    loadList(page)
  })
  $('#detail-list').on('click', '.next', function () {
    page = page + 1;
    if (page >= total) {
      page = total
    }
    loadList(page)
  })

  $('#detail-list').on('change', 'select', function (e) {
    page = $(this).val()
    loadList(page)
  })


  var html = '<div class="page">' +
    '<button class="prev">上一页</button>' +
    '<select name="" id="">'
  for (var i = 1; i <= total; i++) {
    html += '<option value="' + i + '" ' + (Number(page) === i ? 'selected' : '') + '>' + i + '/' + total + '</option>'
  }
  html += '</select>' +
    '<button class="next">下一页</button>' +
    '</div>'

  $('#detail-list').append(html)
}