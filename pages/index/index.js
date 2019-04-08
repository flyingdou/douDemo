var obj = null;
Page({
  
  data: {
    // subkey: 'P33BZ-ERVKG-JPJQO-I6ZJ3-2GWH7-EVBEQ',
    show: false,
    result: '武汉市黄陂区木兰乡',
    latitude: 23.099994,
    longitude: 113.324520,
    markers: [{
      id: 1,
      latitude: 23.099994,
      longitude: 113.324520,
      name: 'T.I.T 创意园',
    }],
    covers: [{
      latitude: 23.099994,
      longitude: 113.344520,
      iconPath: '/image/location.png'
    }, {
      latitude: 23.099994,
      longitude: 113.304520,
      iconPath: '/image/location.png'
    }]
  },

  onLoad: function () {
    obj = this;
    // 初始化页面数据
    obj.init();
  },

  onShow: function () {

  },

  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
  },
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function (res) {
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  translateMarker: function () {
    this.mapCtx.translateMarker({
      markerId: 1,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: 23.10229,
        longitude: 113.3345211,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
  includePoints: function () {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude: 23.10229,
        longitude: 113.3345211,
      }, {
        latitude: 23.00229,
        longitude: 113.3345211,
      }]
    })
  },

  changeMarker (e) {
    var markers = obj.data.markers || [];
    markers.forEach((marker)=>{
       if (marker.id == e.markerId) {
         marker.iconPath = '../../image/location.png';
       }
    });
    obj.setData({
      markers: markers,
    });
    

  },

  showPopup() {
    obj.setData({show: true});
  },

  onClose() {
    obj.setData({ show: false });
  },

  /**
   * 初始化页面数据
   */
  init () {
    var funs = [
      {
        'name': '办税点筛选',
        'iconPath': '../../image/filter.png',
        'link': '../../index/index',
        'fun': 'showPopup'
      },
      {
        'name': '大厅流量查询',
        'iconPath': '../../image/search.png',
        'link': '../../index/index',
        'fun': 'showPopup'
      }
    ];

    var chooseList = [
      {
        'title': '类型',
        'type': 'style',
        'data': [
          {
            'id': 0,
            'name': '全部',
          },
          {
            'id': 1,
            'name': '第一税务所(办税服务厅)',
          },
          {
            'id': 2,
            'name': '税务服务站',
          },
          {
            'id': 3,
            'name': '邮政代开网点',
          },
          {
            'id': 4,
            'name': '政务中心',
          },
          {
            'id': 5,
            'name': '车购税办税网点',
          },
          {
            'id': 6,
            'name': '专项业务办税点',
          }
        ]
      },
      {
        'title': '地区',
        'type': 'district',
        'data': [
          {
            'id': 0,
            'name': '全部',
          },
          {
            'id': 1,
            'name': '江岸区',
          },
          {
            'id': 2,
            'name': '江汉区',
          },
          {
            'id': 3,
            'name': '硚口区',
          },
          {
            'id': 4,
            'name': '汉阳区',
          },
          {
            'id': 5,
            'name': '武昌区',
          },
          {
            'id': 6,
            'name': '青山区',
          },
          {
            'id': 7,
            'name': '东湖高新技术开发区',
          },
          {
            'id': 8,
            'name': '武汉经济技术开发区',
          },
          {
            'id': 9,
            'name': '洪山区',
          },
          {
            'id': 10,
            'name': '东西湖区',
          },
          {
            'id': 11,
            'name': '蔡甸区',
          },
          {
            'id': 12,
            'name': '江夏区',
          },
          {
            'id': 13,
            'name': '黄陂区',
          }, 
          {
            'id': 14,
            'name': '新洲区',
          },
          {
            'id': 15,
            'name': '东湖生态旅游风景区',
          },
          {
            'id': 16,
            'name': '化学工业区',
          }
        ]
      },
      {
        'title': '附近',
        'type': 'nearby',
        'data': [
          {
            'id': 0,
            'name': '全部',
          },
          {
            'id': 1,
            'name': '1km',
          },
          {
            'id': 2,
            'name': '2km',
          },
          {
            'id': 3,
            'name': '3km',
          },
          {
            'id': 4,
            'name': '4km',
          },
          {
            'id': 5,
            'name': '5km',
          }
        ]
      }
    ];

    // 获取页面高度
    var sysInfo = wx.getSystemInfoSync();
    obj.setData({
      funs: funs,
      chooseList: chooseList,
      sysInfo: sysInfo
    });
    
  },

  /**
   * goto
   */
  goto (e) {
    console.log(e.currentTarget.dataset.link);
  },

})
