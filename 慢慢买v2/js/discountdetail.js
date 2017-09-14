$(function () {
  let detailPage = new Page()
  let pid = detailPage.getUrlParas().productid
  detailPage.getMoneyCtrlProduct(pid, (data) => {
    console.log(data)
    let html = template('productDetailTpl', data)
    console.log(html)
    $('#content').html(html)
  })
})
