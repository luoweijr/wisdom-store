const getOpenIdBarIndex = 1; 

Page({
  /**
   * 页面的初始数据
   */
  data: {
    showUploadTip: false,
    haveGetOpenId: false,
    envId: '',
    openId: ''
  },

  onLoad(options) {
    this.setData({
      envId: options.envId
    })
  },
	onShow: function () {
		if (typeof this.getTabBar === 'function' && this.getTabBar()) {
			this.getTabBar().setData({
				selected: getOpenIdBarIndex
			})
		}
	},
  getOpenId() {
    wx.showLoading({
      title: '',
    })
   wx.cloud.callFunction({
      name: 'quickstartFunctions',
      config: {
        env: this.data.envId
      },
      data: {
        type: 'getOpenId'
      }
    }).then((resp) => {
      this.setData({
        haveGetOpenId: true,
        openId: resp.result.openid
      })
     wx.hideLoading()
   }).catch((e) => {
      this.setData({
        showUploadTip: true
      })
     wx.hideLoading()
    })
  },

  clearOpenId() {
    this.setData({
      haveGetOpenId: false,
      openId: ''
    })
  }

})
