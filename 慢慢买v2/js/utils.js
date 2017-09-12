/**
 * 所有的工具函数
 */

function Page () { }

/**
 * 获取首页菜单
 * 
 * @param {any} callback 
 */
Page.prototype.loadIndexMenu = function (callback) {
  $.ajax({
    url: 'http://182.254.146.100:3000/api/getindexmenu',
    success: function (data) {
      callback(data)
    }
  })
}

/**
 * 获取 url 地址中的参数
 * 
 * @returns arr
 */
Page.prototype.getUrlParas = function () {
  let url = window.location.href
  let queryStr = url.split('?')[1]
  let parasArr = queryStr && queryStr.split('&')
  let res = {}
  if (parasArr) {
    parasArr.forEach(item => {
      item = item.split('=')
      item && (res[item[0]] = item[1])
    })
  }
  return res;
}

/**
 * 获取省钱控数据
 * 
 * @param {Funtion} callback 
 * @param {Number} pageId 
 */
Page.prototype.getMoneyCtrl = function (callback, pageId) {
  pageId = pageId || 1
  $.ajax({
    data: { pageid: pageId },
    url: 'http://182.254.146.100:3000/api/getmoneyctrl',
    success: function (data) {
      callback(data)
    }
  })
}

/**
 * 获取分类的标题信息（大家电，手机数码...）等
 */
Page.prototype.getCategoryTitle = function (callback) {
  $.ajax({
    url: 'http://182.254.146.100:3000/api/getcategorytitle',
    success: function (data) {
      callback(data)
    }
  })
}


/**
 * 根据 titleId 查询分类信息
 * 
 * @param {Number} tid 
 * @param {Function} callback 
 */
Page.prototype.getCategory = function (tid, callback) {
  $.ajax({
    data: { titleid: tid },
    url: 'http://182.254.146.100:3000/api/getcategory',
    success: function (data) {
      callback(data)
    }
  })
}
/**
 * 根据分类的id获取分类的名称
 * 
 * @param {Number} cid 分类的id
 * @param {Function} callback 
 */
Page.prototype.getCategoryById = function (cid, callback) {
  $.ajax({
    data: { categoryid: cid },
    url: 'http://182.254.146.100:3000/api/getcategorybyid',
    success: function (data) {
      callback(data)
    }
  })
}


/**
 * 根据分类id获取该分类的商品列表
 * 
 * @param {Number} cid 
 * @param {Function} callback 
 * @param {Number} 默认值 1
 */
Page.prototype.getProductList = function (cid, callback, pid = 1) {
  $.ajax({
    data: {
      categoryid: cid,
      pid: pid
    },
    url: 'http://182.254.146.100:3000/api/getproductlist',
    success: function (data) {
      callback(data)
    }
  })
}
/**
 * 根据商品id获取商品的详细信息
 * 
 * @param {Number} pid productId
 * @param {Function} callback 
 */
Page.prototype.getProduct = function (pid, callback) {
  $.ajax({
    data: {
      productid: pid
    },
    url: 'http://182.254.146.100:3000/api/getproduct',
    success: function (data) {
      callback(data)
    }
  })
}

/**
 * 根据商品id获取该商品的评论信息
 * 
 * @param {Number} pid productId
 * @param {Function} callback 
 */
Page.prototype.getProductCom = function (pid, callback) {
  $.ajax({
    data: {
      productid: pid
    },
    url: 'http://182.254.146.100:3000/api/getproductcom',
    success: function (data) {
      callback(data)
    }
  })
}