$(function () {
  $.ajax({
    url: url + '/api/getbrand',
    data: { brandtitleid: getId().brandtitleid },
    success: function (data) {
      // console.log(data)
      var html = template('brandTpl', data)
      $('#brand .list').html(html)
    }
  })
  $.ajax({
    url: url + '/api/getbrandproductlist',
    data: { brandtitleid: getId().brandtitleid },
    success: function (data) {
      // console.log(data)
      var html = template('salesTpl', data)
      $('#sales .list').html(html)
      getComment()
    }
  })


})
function getComment () {
  var pid = $('#sales .list li:first-child a').attr('pid')
  var cid = $('#sales .list li:first-child a').attr('cid')
  console.log(pid)
  $.ajax({
    url: url + '/api/getproductcom',
    data: {
      productid: pid,
      categoryid: cid
    },
    success: function (data) {
      console.log(data)
      var html = template('comTpl', data)
      $('#comment .list').html(html)

      getProduct(pid)
    }
  })
}

function getProduct (id) {
  $.ajax({
    url: url + '/api/getproduct',
    data: { productid: id },
    success: function (data) {
      console.log(data)
      var html = template('productTpl', data)
      $('#comment .list li>a').html(html)
    }
  })
}

