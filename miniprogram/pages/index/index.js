//index.js
const app = getApp()
const { envList } = require('../../envList.js')

Page({
  data: {
    showUploadTip: false,
    tutors:[],
    imageUrls: ['../../images/pic-1.jpg', '../../images/pic-2.jpg', '../../images/pic-3.jpg'],
    teachNav: [
      {images: '../../images/icon-1.png', text:'语文'},
      {images: '../../images/icon-2.png', text:'数学'},
      {images: '../../images/icon-3.png', text:'奥数'},
      {images: '../../images/icon-4.png', text:'英语'},
      {images: '../../images/icon-5.png', text:'物理'},
      {images: '../../images/icon-6.png', text:'小语种'},
      {images: '../../images/icon-7.png', text:'化学'},
      {images: '../../images/icon-8.png', text:'生物'},
      {images: '../../images/icon-9.png', text:'历史'},
      {images: '../../images/icon-10.png', text:'地理'},
      {images: '../../images/icon-11.png', text:'政治'},
      {images: '../../images/icon-12.png', text:'音美体'}
    ]
  },
  
  onShow() {
    wx.cloud.callFunction({
      name: 'quickstartFunctions',
      data: {
        type: 'user',
        func: "getUserList"
      }
    }).then((resp) => {
      this.setData({
        tutors: resp.result.res.data
      })
    }).catch((e) => {
      console.log(e)
    })
  },


})
