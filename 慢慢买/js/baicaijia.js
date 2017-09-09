$(function () {
  loadMenu()
  $('#menu .tab ul').on('click', 'li', function () {
    $(this).addClass('active').siblings().removeClass('active')
    // console.log($(this).attr('title-id'))
    loadList($(this).attr('title-id'))
  })
})

function loadMenu () {
  $.ajax({
    type: 'get',
    url: url + '/api/getbaicaijiatitle',
    dateType: 'json',
    success: function (data) {
      console.log(data)
      var html = template('menuTpl', data)
      $('#menu .tab ul').html(html)
      // 设置默认显示的tab
      setActivetTab()
      // console.log(html)
      // 设置 ul 的宽度
      setTabUlWidth()
      loadList()
      new IScroll('.tab', {
        scrollX: true, scrollY: false
      })
    }
  })
}

function setActivetTab (index) {
  index = index || 0
  $('#menu .tab ul').find('li:eq(' + index + ')').addClass('active')
}

// 设置 ul 的宽度
function setTabUlWidth () {
  var list = $('#menu .tab ul').children()
  var width = 0;
  $.each(list, function (index, item) {
    console.log(index,$(item).width())
    width += Number($(item).width())
  })
  console.log(width)
  $('#menu .tab ul').width(width+10)
}
function loadList (tabId) {
  tabId = tabId || 0
  $.ajax({
    type: 'get',
    url: url + '/api/getbaicaijiaproduct',
    data: { titleid: tabId },
    dateType: 'json',
    success: function (data) {
      // console.log(data)
      var html = template('contentTpl', data)
      $('#menu .content').html(html)
    }
  })
}