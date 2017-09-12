$(function () {
  let productPage = new Page()
  let pid = productPage.getUrlParas().productid
  productPage.getProduct(pid, (data) => {
    console.log(data)
    // 渲染 商品详情
    let html = template('productTpl', data)
    $('#content').html(html)
    let tbhtml = template('tableTpl',data)
    $('#money .table').html(tbhtml)


    // 渲染 三级菜单
    let cid = data.result[0].categoryId
    productPage.getCategoryById(cid, (data) => {
      let html = template('menuTpl', data)
      $('#menu').html(html)
    })
  })

  // 获取评论信息
  productPage.getProductCom(pid, (data) => {
    console.log(data)
    let html = template('comTpl', data)
    $('#comment>ul').html(html)
  })
})