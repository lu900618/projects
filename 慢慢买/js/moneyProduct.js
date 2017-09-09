$(function () {
  loadDetail()
})

function loadDetail () {
  var id = getId().productid

  $.ajax({
    type: 'get',
    data: { productid: id },
    dataType: 'json',
    url: url + '/api/getmoneyctrlproduct',
    success: function (data) {
      console.log(data)
      var html = template('detailTpl',data)      
      $('#detail').html(html)
    }
  })
}