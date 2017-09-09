$(function () {
  var page = 1
  getMenu()
  getRecommend()
  $('#menu .container .row').on('click', 'div:nth-child(8)', function () {
    $('#menu .container .row div:nth-last-child(-n+4)').toggle()
  })
  $('.recommend-more a').on('click', function () {
    getRecommend()
  })

  function getMenu () {
    $.ajax({
      type: 'get',
      url: url + '/api/getindexmenu',
      dataType: 'json',
      success: function (data) {
        var html = ''
        data['result'].forEach(function (item) {
          html += '<div class="col-xs-3">'
          html += '<a href="' + item.titlehref + '">'
          html += item.img
          html += '<p>' + item.name + '</p>'
          html += '</a></div>'
        }, this)
        // document.querySelector('#menu .container .row').innerHTML = html
        $('#menu .container .row').html(html)
      }
    })
  }

  function getRecommend () {
    $.ajax({
      type: 'get',
      data: { page: page },
      url: 'http://182.254.146.100:3000/api/getmoneyctrl',
      dataType: 'json',
      success: function (data) {
        var html = template('recommendTpl', data)
        $('.recommend-list').append(html)
        page++
      }
    })
  }
})