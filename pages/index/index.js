var app = getApp();
var util = require('../../utils/util.js');
var obj = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    base_img_url: app.constant.base_domain + 'picture/'

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    obj = this;
    obj.init();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
   
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * init
   */
  init: () => {
    wx.showLoading({
      title: '加载中...',
      mask: true
    })

    var funcList = [
      {
        'id': 0,
        'name': '预约',
        'icon': '../../icon/index-icon/linshi.png',
        'count': 10
      },
      {
        'id': 1,
        'name': '办税ID',
        'icon': '../../icon/index-icon/id.png',
        'count': 8
      },
      {
        'id': 2,
        'name': '意见反馈',
        'icon': '../../icon/index-icon/feedback.png',
        'count': 14
      },
      {
        'id': 3,
        'name': '排队信息',
        'icon': '../../icon/index-icon/queue.png',
        'count': 14
      },
      {
        'id': 3,
        'name': '纳税信息',
        'icon': '../../icon/index-icon/weiyanshou.png',
        'count': 201
      },
      
    ];

    /**
     * 调整funcList大小
     */
    obj.resizeList(funcList,3);
    wx.hideLoading();


    
  },

  /**
   * 数组大小调整为3个
   */
  resizeList: (funList,len) => {
    var blocksDiv1 = [], blockDiv1 = [], blocksDiv2 = [], blockDiv2 = [];
    for (var i = 0; i < funList.length; i++) {
      if (funList[i].type == 1) {
        blockDiv1.push(funList[i]);
      } else {
        blockDiv2.push(funList[i]);
      }
      if (blockDiv1.length == len) {
        blocksDiv1.push(blockDiv1); 
        blockDiv1 = []; 
      }
      if (blockDiv2.length == len) {
        blocksDiv2.push(blockDiv2); 
        blockDiv2 = []; 
      }
      if (i == (funList.length - 1)) {
        if (blockDiv1.length > 0) {
          blocksDiv1.push(blockDiv1); 
        }
        if (blockDiv2.length > 0) {
          blocksDiv2.push(blockDiv2); 
        }
      }
    }
    obj.setData({
      blocksDiv1: blocksDiv1,
      blocksDiv2: blocksDiv2
    });
  },



})