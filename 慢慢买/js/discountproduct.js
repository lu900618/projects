$(function () {
  
  
    loadDetail()
  })
  
  function loadDetail () {
    var id = getId()
    console.log(id)
  
    $.ajax({
      type: 'get',
      data: { productid: id },
      dataType: 'json',
      url: url + '/api/getdiscountproduct',
      success: function (data) {
        console.log(data)
        var html = template('detailTpl',data)      
        $('#detail').html(html)
      }
    })
  }