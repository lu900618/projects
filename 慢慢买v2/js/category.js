$(function () {
  let catPage = new Page()
  catPage.getCategoryTitle((data) => {
    var html = template('catTitleTpl', data)
    $('#content>.title').html(html)
  })

  // 点击列表事件
  $('#content>.title').on('tap', 'li>a', (e) => {
    let tid = $(e.target.parentNode).attr('tid')
    catPage.getCategory(tid, (data) => {
      // 渲染数据
      var html = template('catTpl', data)
      $('#content .title li[tid="' + tid + '"] .con').html(html)
      // 修改当前 ul 最下排 css 样式
      var len = $('#content .title li[tid="' + tid + '"] .con').children().length
      var c = len % 3 || 3
      $('#content .title li[tid="' + tid + '"] .con li:nth-last-child(-n+' + c + ')').css('border-bottom', 'none')
    })
  })

  // 点击显示小分类
  $('#content>.title').on('tap', 'li', (e) => {
    $(e.target.parentNode).siblings().find('.con').hide()
    $(e.target.parentNode).find('.con').show()
  })
})