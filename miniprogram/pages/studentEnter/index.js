const getOpenIdBarIndex = 1; 

Page({
  /**
   * 页面的初始数据
   */
  data: {
    navState: 0,
    classifyNav: [
      {icon: '../../images/classify-0.png',text:'学龄前'},
      {icon: '../../images/classify-1.png',text:'小学'},
      {icon: '../../images/classify-2.png',text:'初中'},
      {icon: '../../images/classify-3.png',text:'高中'},
      {icon: '../../images/classify-4.png',text:'大学'},
      {icon: '../../images/classify-5.png',text:'研究生'},
      {icon: '../../images/classify-6.png',text:'成人'},
      {icon: '../../images/classify-7.png',text:'国际学校'},
      {icon: '../../images/classify-8.png',text:'留学生'}
    ],
    teacherNav:[
      {icon: '../../images/teacher-0.png',text:'语文'},
      {icon: '../../images/teacher-1.png',text:'数学'},
      {icon: '../../images/teacher-2.png',text:'奥数'},
      {icon: '../../images/teacher-3.png',text:'英语'},
      {icon: '../../images/teacher-4.png',text:'物理'},
      {icon: '../../images/teacher-5.png',text:'小语种'},
      {icon: '../../images/teacher-6.png',text:'化学'},
      {icon: '../../images/teacher-7.png',text:'生物'},
      {icon: '../../images/teacher-8.png',text:'历史'},
      {icon: '../../images/teacher-9.png',text:'地理'},
      {icon: '../../images/teacher-10.png',text:'政治'},
      {icon: '../../images/teacher-11.png',text:'音体美'}
    ]
  },
  //点击导航
  navSwitch: function(e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      navState:index
    })
  },

	onShow: function () {
		this.activePageTabBar()
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

  activePageTabBar() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
			this.getTabBar().setData({
				selected: getOpenIdBarIndex
			})
    }
  }
})
