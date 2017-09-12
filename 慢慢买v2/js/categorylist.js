$(function () {
  let catlistPage = new Page()
  let cid = catlistPage.getUrlParas().categoryid
  // 设置三级联动菜单
  catlistPage.getCategoryById(cid, (data) => {
    let html = template('menuTpl', data)
    $('#menu').html(html)
  })

  // 获取列表
  catlistPage.getProductList(cid, (data) => {
    let html = template('productlistTpl', data)
    $('#categorylist>ul').html(html)
  })
})

