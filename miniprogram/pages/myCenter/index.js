const myCenterBarIndex = 3; 

Page({
  /**
   * 页面的初始数据
   */
  data: {
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
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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