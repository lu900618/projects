$(function () {

  getCats()

  $('#container .row').on('click', '.cat', function () {
    var id = $(this).attr('cid')
    loadDetail(id)
    // $('#container .row .list').hide()
    $('#container .row .list').slideUp()
    $('#container .row .list[cid=' + id + ']').toggle()
  })
})

// 获取所有分类
function getCats () {
  $.ajax({
    url: url + '/api/getcategorytitle',
    dataType: 'json',
    success: function (data) {
      var html = template('catsTpl', data)
      $('#container .row').html(html)
    }
  })
}
// 二级分类数据
function loadDetail (id) {
  console.log(id)
  $.ajax({
    url: url + '/api/getcategory',
    data: { "titleid": id },
    dataType: 'json',
    success: function (data) {
      var html = template('subCatTpl', data)
      $('#container .row .list[cid=' + id + ']').html(html)
      var num = data.result.length % 3
      $('.list').children('li:nth-last-child(-n+' + num + ')').css('border-bottom', 'none')
    }
  })
}