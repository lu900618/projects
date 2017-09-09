$(function () {
  loadList()
})

function loadList () {
  $.ajax({
    type: 'get',
    url: url + '/api/getinlanddiscount',
    dataType: 'json',
    success: function (data) {
      console.log(data)
      var html = template('listTpl', data)
      $('#discount-list ul').html(html)
    }
  })
}