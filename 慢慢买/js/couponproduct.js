$(function () {
  loadList()

  var winHeight = $(window).height()

  $('#content>ul').on('click', 'li', function () {
    $('.fullImg').css({
      height: $(document).height()
    }).show()
    $('.fullImg img').css({
      'top': winHeight / 2,
      'margin-top': '-100px'
    })
    $('.fullImg img').attr({
      'src': $(this).find('img').attr('src'),
      'cpid': $(this).attr('cpid')
    })
    $('.fullImg span').css({
      'top': winHeight / 2,
      'margin-top': '-100px'
    })
    $('.fullImg span.prev').css({
      'left': '100px'
    })
    $('.fullImg span.next').css({
      'right': '100px'
    })

  })


  // 左按钮事件
  $('.fullImg span.prev').on('click', function (e) {
    e.stopPropagation();
    var cpid = $('.fullImg img').attr('cpid')
    var cpidLi = $('#content ul li[cpid=' + cpid + ']')
    var newCpid = cpidLi.prev().attr('cpid')
    $('.fullImg img').attr({
      'src': cpidLi.prev().find('img').attr('src'),
      'cpid': cpidLi.prev().attr('cpid')
    })
  })
  // 右按钮时间
  $('.fullImg span.next').on('click', function (e) {
    e.stopPropagation();
    var cpid = $('.fullImg img').attr('cpid')
    var cpidLi = $('#content ul li[cpid=' + cpid + ']')
    var newCpid = cpidLi.next().attr('cpid')
    $('.fullImg img').attr({
      'src': cpidLi.next().find('img').attr('src'),
      'cpid': cpidLi.next().attr('cpid')
    })
  })
  // 图片点击事件
  $('.fullImg img').on('click', function (e) {
    e.stopPropagation();
  })
  // 点击消失
  $('.fullImg').on('click', function (e) {
    $(this).hide()
    e.stopPropagation();
  })
})




function loadList () {
  var id = getId().couponid
  $.ajax({
    type: 'get',
    data: { 'couponid': id },
    dataType: 'json',
    url: url + '/api/getcouponproduct',
    success: function (data) {
      console.log(data)
      var html = template('listTpl', data)
      $('#content ul').html(html)
    }
  })
}