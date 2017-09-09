$(function () {
  loadList()
  $('.back').on('click', function () {

    $('html,body').animate({ scrollTop: 0 }, 'slow');
  })
})

function loadList (page) {
  page = page || 1
  $.ajax({
    type: 'get',
    data: { pageid: page },
    dataType: 'json',
    url: url + '/api/getmoneyctrl',
    success: function (data) {
      console.log(data)
      var html = template('itemListTpl', data)
      $('#list ul').html(html)

      loadPage(page, Math.ceil(data.totalCount / data.pagesize))
    }
  })
}

function loadPage (page, total) {
  $('#list').off('click', '.prev')
  $('#list').off('click', '.next')
  $('#list').off('change', 'select')
  // console.log(page, total)
  var html = '<button class="prev">上一页</button>' +
    '<select name="" id="">'
  for (var i = 1; i < total; i++) {
    html += '<option value="' + i + '" ' + (Number(page) === i ? 'selected' : '') + '>' + i + '</option>'
  }
  html += '</select>' +
    '<button class="next">下一页</button>'
  $('#list .page').html(html)



  $('#list').on('click', '.prev', function () {
    page = page - 1;
    if (page <= 0) {
      page = 1
    }
    loadList(page)
  })
  $('#list').on('click', '.next', function () {
    page = page + 1;
    if (page >= total) {
      page = total
    }
    loadList(page)
  })

  $('#list').on('change', 'select', function (e) {
    page = $(this).val()
    loadList(page)
  })
}