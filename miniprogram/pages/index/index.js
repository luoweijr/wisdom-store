//index.js
const app = getApp()
const { envList } = require('../../envList.js')

Page({
  data: {
    showUploadTip: false,
    tutors:[],
    imageUrls: ['../../images/pic-1.jpg', '../../images/pic-2.jpg', '../../images/pic-3.jpg'],
    teachNav: [
      {images: '../../images/icon-1.png', text:'亚洲'},
      {images: '../../images/icon-2.png', text:'日本'},
      {images: '../../images/icon-3.png', text:'韩国'},
      {images: '../../images/icon-4.png', text:'欧美'},
      {images: '../../images/icon-5.png', text:'非洲'},
      {images: '../../images/icon-6.png', text:'德国'},
      {images: '../../images/icon-6.png', text:'朝鲜'},
      {images: '../../images/icon-5.png', text:'印度'},
      {images: '../../images/icon-4.png', text:'越南'},
      {images: '../../images/icon-3.png', text:'美国'},
      {images: '../../images/icon-2.png', text:'英国'},
      {images: '../../images/icon-1.png', text:'罗斯'}
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
