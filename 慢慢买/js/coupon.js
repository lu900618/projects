$(function () {
  loadShop()
})

function loadShop () {
  $.ajax({
    type: 'get',
    dataType: 'json',
    url: url + '/api/getcoupon',
    success: function (data) {
      console.log(data)
      var html = template('listTpl', data)
      $('#content ul').html(html)
    }
  })
}