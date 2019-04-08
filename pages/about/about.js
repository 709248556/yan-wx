// about.js
var app = getApp()
var util = require("../../utils/util.js");


var api = require("../../config/api.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    load_statue: true,
    shopInfo: {
      shopName: '微服务小程序商城',
      name :'颜良龙',
      leaderTeacher:'曾绍庚',
      address: 'https://github.com/709248556/springCloud',
      latitude: 31.201900,
      longitude: 121.587839,
      linkPhone: '13414851479',
      
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  showLocation: function (e) {
    var that = this
    wx.openLocation({
      latitude: that.data.shopInfo.latitude,
      longitude: that.data.shopInfo.longitude,
      name: that.data.shopInfo.name,
      address: that.data.shopInfo.address,
    })
  },
  callPhone: function (e) {
    var that = this
    wx.makePhoneCall({
      phoneNumber: that.data.shopInfo.linkPhone,
    })
  },
  reLoad: function (e) {
    this.loadShopInfo();
  }
})