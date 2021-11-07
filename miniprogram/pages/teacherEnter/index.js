const getMiniProgramCodeBarIndex = 2; 

Page({
  /**
   * 页面的初始数据
   */
  data: {
    showUploadTip: false,
    imageUrls: ['../../images/pic-1.jpg', '../../images/pic-2.jpg', '../../images/pic-3.jpg'],
  },

  onLoad(options) {
    this.setData({
      envId: options.envId
    })
  },
	onShow: function () {
    this.activePageTabBar()
    wx.cloud.callFunction({
      name: 'quickstartFunctions',
      data: {
        type: 'stu',
        func: "getOrderList"
      }
    }).then((resp) => {
      this.setData({
        studentList: resp.result.res.data
      })
    }).catch((e) => {
      console.log(e)
    })
	},
  activePageTabBar() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
			this.getTabBar().setData({
				selected: getMiniProgramCodeBarIndex
			})
		}
  }

})
