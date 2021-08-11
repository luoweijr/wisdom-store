// miniprogram/pages/registration/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    mobile: '',
    gender: '',
    genderId: 1,
    genderPopupShow: false,
    genderColumns: ['男', '女'],
    birthdayPopupShow: false,
    birthday: '',
    birthdayMinYear: new Date(1959, 1, 1).getTime(),
    birthdayCurrDate: new Date(1980, 1, 1).getTime(),
    fileList: [],
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      }
      if (type === 'month') {
        return `${value}月`;
      }
      return `${value}日`;
    },
  },

  /**
   * 性别输入框点击时,唤起弹出层和性别选择器
   */
  onGenderInputClick: function (options) {
    console.log(this.data.genderId)
    this.setData({
      genderPopupShow: true
    })
  },

  onGenderConfirm: function (options) {
    console.log(options)
    this.setData({
      gender: options.detail.value,
      genderId: options.detail.index + 1,
      genderPopupShow: false,
    });
  },

  onGenderCancel: function (options) {
    this.setData({
      genderPopupShow: false
    });
  },

  /**
   * 生日输入框点击时,唤起弹出层和生日选择器
   */
  onBirthdayInputClick: function (options) {
    this.setData({
      birthdayPopupShow: true
    })
  },

  onBirthdayConfirm: function (options) {
    this.setData({
      birthday: new Date(options.detail).toISOString().substring(0,10),
      birthdayPopupShow: false,
    });
  },

  onBirthdayCancel: function (options) {
    this.setData({
      birthdayPopupShow: false,
    });
  },

  onAfterRead: function (options) {
    const { file } = options.detail;
    console.log(options);
    let tempList = this.data.fileList;
    tempList.push(...file);
    this.setData({
      fileList: tempList 
    });
  },

  onDeleteFile: function (options) {
    let list = this.data.fileList;
    list.splice(options.detail.index, 1);
    this.setData({
      fileList: list
    });
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