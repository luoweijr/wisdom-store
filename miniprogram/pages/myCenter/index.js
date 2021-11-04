const myCenterBarIndex = 3; 

Page({
  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: '../../images/icon-usecenter.png',
    userName: '微信用户',
    menuNav: [
      {title:'我的服务',menulist:[
        {icon: '../../images/icon-13.png',text:'我的发布'},
        {icon: '../../images/icon-14.png',text:'我的收藏'},
        {icon: '../../images/icon-15.png',text:'推广合伙'},
        {icon: '../../images/icon-16.png',text:'绑定信息'}
      ]},
      {title:'平台服务',menulist:[
        {icon: '../../images/icon-17.png',text:'联系客服'},
        {icon: '../../images/icon-18.png',text:'帮助中心'},
        {icon: '../../images/icon-19.png',text:'关于我们'}
      ]},
      {title:'教员入口',menulist:[
        {icon: '../../images/icon-20.png',text:'教员入住'},
        {icon: '../../images/icon-21.png',text:'教员登录'}
      ]}
    ],
    isAuth: false
  },

  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '用于小程序中展示头像、昵称', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        wx.cloud.callFunction({
          name: 'quickstartFunctions',
          data: {
            type: 'user',
            func: "updateUserAuthStatus",
            userInfo: {
              is_auth: true,
              wx_avatar: res.userInfo.avatarUrl,
              wx_nickName: res.userInfo.nickName
            }
          }
        }).then((resp) => {
          this.setData({
            isAuth: true,
            userName: res.userInfo.nickName,
            avatarUrl: res.userInfo.avatarUrl
          })
        }).catch((e) => {
          console.log(e)
        })
      },
      fail: (res) => {
        // 用户不同意触发
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.callFunction({
      name: 'quickstartFunctions',
      data: {
        type: 'user',
        func: "getUserInfo"
      }
    }).then((resp) => {
      this.setData({
        isAuth: resp.result.res.is_auth,
        avatarUrl: resp.result.res.wx_avatar,
        userName: resp.result.res.wx_nickName
      })
    }).catch((e) => {
      console.log(e)
    })
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
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
			this.getTabBar().setData({
				selected: myCenterBarIndex
			})
		}
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

  }
})