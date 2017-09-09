$(function () {
  loadList()
})

function loadList () {
  $.ajax({
    url: url + '/api/getbrandtitle',
    success: function (data) {
      console.log(data)
      var html = template('tpl',data)
      $('.list').html(html)
    }
  })
}