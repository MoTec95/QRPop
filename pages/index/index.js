//index.js
//获取应用实例
const app = getApp()
var QR = require("../../utils/wxqrcode.js");

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    showQR:false,
  },
  
  showQR:function(){
    this.setData({
      showQR: true
    })
    console.log("showQR")
    var size = this.getQRCodeSize();
    // 经测试 wxqrcode.js 库能生成二维码的 text 长度最大为 62 个字符，估计是 bug
    // 所以 只能使用 qrcode.js 库，根据已有代码，自己调试吧
    var text = 'F200665A302960CAF3B666CA5988C5DBF200665A302960CAF3B666CA598888';
    var base64_qr_img = this.createQRCode(text,size);
    this.setData({
      qr_code: base64_qr_img
    })
  },

  preventTouchMove: function (e) {
    console.log("preventTouchMove event: " + e)
  },

  tapcatch:function(e){
    console.log("tapcatch event: " + e)
  },

  cancle: function () {
    this.setData({
      showQR:false,
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  //获取二维码大小，适配不同屏幕大小的canvas
  getQRCodeSize: function () {
    var size = 0;
    try {
      var res = wx.getSystemInfoSync();
      var scale = 750 / 278; //不同屏幕下QRcode的适配比例；设计稿是750宽
      var width = res.windowWidth / scale;
      size = width;
    } catch (e) {
    }
    return size;
  },

  //创建(绘制) base64 编码的二维码
  createQRCode: function (text, size) {
    let that = this
    let _img = QR.createQrCodeImg(text, {
      size: parseInt(size)
    })
    console.log("_img: " + _img)
    return _img;
  },

})
