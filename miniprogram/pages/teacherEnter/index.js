const getMiniProgramCodeBarIndex = 2; 

Page({
  /**
   * 页面的初始数据
   */
  data: {
    showUploadTip: false,
    haveGetCodeSrc: false,
    envId: '',
    codeSrc: ''
  },

  onLoad(options) {
    this.setData({
      envId: options.envId
    })
  },
	onShow: function () {
		if (typeof this.getTabBar === 'function' && this.getTabBar()) {
			this.getTabBar().setData({
				selected: getMiniProgramCodeBarIndex
			})
		}
	},
  getCodeSrc() {
    wx.showLoading({
      title: '',
    })
    wx.cloud.callFunction({
      name: 'quickstartFunctions',
      config: {
        env: this.data.envId
      },
      data: {
        type: 'getMiniProgramCode'
      }
    }).then((resp) => {
      this.setData({
        haveGetCodeSrc: true,
        codeSrc: resp.result
      })
      wx.hideLoading()
    }).catch((e) => {
      console.log(e)
      this.setData({
        showUploadTip: true
      })
      wx.hideLoading()
    })
  },

  clearCodeSrc() {
    this.setData({
      haveGetCodeSrc: false,
      codeSrc: ''
    })
  }

})
