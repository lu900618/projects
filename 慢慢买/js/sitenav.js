$(function () {
  $.ajax({

    url: url + '/api/getsitenav',
    success: function (data) {
      console.log(data)
      var html = template('tpl', data)
      $('#content ul').html(html)
    }
  })
})