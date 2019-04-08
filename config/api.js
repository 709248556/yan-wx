  // 以下是业务服务器API地址
// 本机开发时使用
// var WxApiRoot = 'http://localhost:8080/wx/';
var WxApiRoot = 'http://localhost:8089/';
// 局域网测试使用
// var WxApiRoot = 'http://192.168.0.101:8080/wx/';
// 云平台部署时使用
// var WxApiRoot = 'http://122.152.206.172:8080/wx/';
// 云平台上线时使用
// var WxApiRoot = 'https://www.menethil.com.cn/wx/';

module.exports = {
  // IndexUrl: WxApiRoot + '/home/index', //首页数据接口
  IndexUrl: WxApiRoot + 'market/home/index', //首页数据接口
  CatalogList: WxApiRoot + '/market/catalog/index', //分类目录全部分类数据接口
  CatalogCurrent: WxApiRoot + 'market/catalog/current', //分类目录当前分类数据接口

  AuthLoginByWeixin: WxApiRoot + 'user/auth/login_by_weixin', //微信登录
  AuthLoginByAccount: WxApiRoot + 'auth/login', //账号登录
  AuthLogout: WxApiRoot + 'auth/logout', //账号登出
  AuthRegister: WxApiRoot + 'auth/register', //账号注册
  AuthReset: WxApiRoot + 'auth/reset', //账号密码重置
  AuthRegisterCaptcha: WxApiRoot + 'auth/regCaptcha', //验证码
  AuthBindPhone: WxApiRoot + 'auth/bindPhone', //绑定微信手机号

  GoodsCount: WxApiRoot + 'goods/count', //统计商品总数
  GoodsList: WxApiRoot + 'goods/list', //获得商品列表
  // GoodsCategory: WxApiRoot + 'goods/category', //获得分类数据
  GoodsCategory: WxApiRoot + 'market/category', //获得分类数据
  GoodsDetail: WxApiRoot + 'goods/detail', //获得商品的详情
  GoodsNew: WxApiRoot + 'goods/new', //新品
  GoodsHot: WxApiRoot + 'goods/hot', //热门
  GoodsRelated: WxApiRoot + 'goods/related', //商品详情页的关联商品（大家都在看）

  BrandList: WxApiRoot + 'goods/brand/list', //品牌列表
  BrandDetail: WxApiRoot + 'goods/brand/detail', //品牌详情

  CartList: WxApiRoot + 'market/index', //获取购物车的数据
  CartAdd: WxApiRoot + 'market/add', // 添加商品到购物车
  CartFastAdd: WxApiRoot + 'market/fastadd', // 立即购买商品
  CartUpdate: WxApiRoot + 'market/update', // 更新购物车的商品
  CartDelete: WxApiRoot + 'market/delete', // 删除购物车的商品
  CartChecked: WxApiRoot + 'market/checked', // 选择或取消选择商品
  CartGoodsCount: WxApiRoot + 'market/goodscount', // 获取购物车商品件数
  CartCheckout: WxApiRoot + 'market/checkout', // 下单前信息确认

  CollectList: WxApiRoot + 'user/collect/list', //收藏列表
  CollectAddOrDelete: WxApiRoot + 'user/collect/addordelete', //添加或取消收藏

  CommentList: WxApiRoot + 'comment/list', //评论列表
  CommentCount: WxApiRoot + 'comment/count', //评论总数
  CommentPost: WxApiRoot + 'comment/post', //发表评论

  TopicList: WxApiRoot + 'topic/list', //专题列表
  TopicDetail: WxApiRoot + 'topic/detail', //专题详情
  TopicRelated: WxApiRoot + 'topic/related', //相关专题

  SearchIndex: WxApiRoot + 'search/index', //搜索关键字
  SearchResult: WxApiRoot + 'search/result', //搜索结果
  SearchHelper: WxApiRoot + 'search/helper', //搜索帮助
  SearchClearHistory: WxApiRoot + 'search/clearhistory', //搜索历史清楚

  AddressList: WxApiRoot + 'user/address/list', //收货地址列表
  AddressDetail: WxApiRoot + 'user/address/detail', //收货地址详情
  AddressSave: WxApiRoot + 'user/address/save', //保存收货地址
  AddressDelete: WxApiRoot + 'user/address/delete', //保存收货地址

  ExpressQuery: WxApiRoot + 'express/query', //物流查询

  RegionList: WxApiRoot + 'user/region/list', //获取区域列表

  OrderSubmit: WxApiRoot + 'user/submit', // 提交订单
  OrderPrepay: WxApiRoot + 'user/prepay', // 订单的预支付会话
  OrderPaySuccess: WxApiRoot + 'user/paySuccess', // 订单的预支付会话
  OrderList: WxApiRoot + 'user/list', //订单列表
  OrderDetail: WxApiRoot + 'user/detail', //订单详情
  OrderCancel: WxApiRoot + 'order/cancel', //取消订单
  OrderRefund: WxApiRoot + 'order/refund', //退款取消订单
  OrderDelete: WxApiRoot + 'order/delete', //删除订单
  OrderConfirm: WxApiRoot + 'order/confirm', //确认收货
  OrderGoods: WxApiRoot + 'order/goods', // 代评价商品信息
  OrderComment: WxApiRoot + 'order/comment', // 评价订单商品信息

  FeedbackAdd: WxApiRoot + 'market/feedback/submit', //添加反馈
  FootprintList: WxApiRoot + 'user/footprint/list', //足迹列表
  FootprintDelete: WxApiRoot + 'user/footprint/delete', //删除足迹

  UserFormIdCreate: WxApiRoot + 'formid/create', //用户FromId，用于发送模版消息

  GroupOnList: WxApiRoot + 'groupon/list', //团购列表
  GroupOn: WxApiRoot + 'groupon/query', //团购API-查询
  GroupOnMy: WxApiRoot + 'groupon/my', //团购API-我的团购
  GroupOnDetail: WxApiRoot + 'groupon/detail', //团购API-详情
  GroupOnJoin: WxApiRoot + 'groupon/join', //团购API-详情

  CouponList: WxApiRoot + 'coupon/list', //优惠券列表
  CouponMyList: WxApiRoot + 'market/coupon/mylist', //我的优惠券列表
  CouponSelectList: WxApiRoot + 'market/coupon/selectlist', //当前订单可用优惠券列表
  CouponReceive: WxApiRoot + 'market/receive', //优惠券领取
  CouponExchange: WxApiRoot + 'coupon/exchange', //优惠券兑换

  StorageUpload: WxApiRoot + 'market/storage/upload', //图片上传,

  UserIndex: WxApiRoot + 'user/index', //个人页面用户相关信息

};