const app = getApp();
Component({
	data: {
		imgUrl: app.imgUrl,
		selected: 0,
		color: "#585858",
		selectedColor: "#ef334d",
		barHeight: "125rpx",
		list: [{
				"pagePath": "/pages/index/index",
				"iconPath": "../images/icon-bar1.png",
				"selectedIconPath": "../images/icon-bar1.png",
				"text": "我的首页"
			},
			{
				"pagePath": "/pages/getOpenId/index",
				"iconPath": "../images/icon-bar2.png",
				"selectedIconPath": "../images/icon-bar2.png",
				"text": "学员入口"
			},
			{
				"pagePath": "/pages/getMiniProgramCode/index",
				"iconPath": "../images/icon-bar3.png",
				"selectedIconPath": "../images/icon-bar3.png",
				"text": "教师入口"
			},
			{
				"pagePath": "/pages/deployService/index",
				"iconPath": "../images/icon-bar4.png",
				"selectedIconPath": "../images/icon-bar4.png",
				"text": "个人中心"
			}
		]
	},
	attached() {
		const res = wx.getSystemInfoSync()
		if(
				res.model.indexOf('iPhone X') != -1 || 
				res.model.indexOf('iPhone XR') != -1 || 
				res.model.indexOf('iPhone XS Max') != -1 || 
				res.model.indexOf('iPhone 11') != -1  || 
				res.model.indexOf('iPhone 11 Pro') != -1  || 
				res.model.indexOf('iPhone 11 Pro Max') != -1
			) {
			this.setData({
				barHeight: "160rpx",
			})
			app.globalData.moreBarHeight = true
		}
	},
	methods: {
		switchTab(e) {
			const data = e.currentTarget.dataset
			const url = data.path
			wx.switchTab({ url })
			this.setData({
				selected: data.index
			})
			console.log(data.index)
		},
	}
})
