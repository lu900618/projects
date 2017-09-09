$(function () {

  loadShopList()

})


function loadShopList () {
  $.ajax({
    type: 'get',
    dataType: 'json',
    url: url + '/api/getgsshop',
    success: function (data) {
      // console.log(data)
      var html = template('optShopTpl', data)
      $('select[name=shopList]').html(html)
      loadArea()

    }
  })
}
function loadArea () {
  $.ajax({
    type: 'get',
    dataType: 'json',
    url: url + '/api/getgsshoparea',
    success: function (data) {
      // console.log(data)
      var html = template('optAreaTpl', data)
      $('select[name=area]').append(html)
      loadList()
    }
  })
}
function loadList () {
  var shopId = $('select[name=shopList]').val()
  var areaId = $('select[name=area]').val()
  $.ajax({
    type: 'get',
    dataType: 'json',
    data: {
      shopid: shopId,
      areaid: areaId
    },
    url: url + '/api/getgsproduct',
    success: function (data) {
      console.log(data)
      var html = template('optListTpl', data)
      $('#content ul').html(html)
    }
  })
}