$(function () {
  loadMenu()
  loadDetail()
  $('#detail').on('click', '.tab li', function () {
    $(this).addClass('active').siblings().removeClass('active')
  })

})

function loadMenu () {
  var cid = getId().categoryid
  $.ajax({
    type: 'get',
    data: { categoryid: cid },
    dataType: 'json',
    url: url + '/api/getcategorybyid',
    success: function (data) {
      console.log(data)
      $('#menu a:nth-child(3)').html(data.result[0].category)
    }
  })
}


//http://mmb.ittun.com/api/getproduct
function loadDetail () {
  var id = getId().productId
  // console.log(id)
  $.ajax({
    type: 'get',
    data: { productid: id },
    dataType: 'json',
    url: url + '/api/getproduct',
    success: function (data) {
      console.log(data)
      var html = template('detailTpl', data)
      $('#detail').html(html)

      loadComment()
    }

  })
}

function loadComment () {
  var id = getId().productId
  $.ajax({
    type: 'get',
    data: { productid: id },
    dataType: 'json',
    url: url + '/api/getproductcom',
    success: function (data) {
      console.log(data)
      $('.tab span').text(data.result.length)
      var html = template('commentTpl', data)
      $('.comment-list').html(html)
    }
  })
}
