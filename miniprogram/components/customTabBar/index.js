Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      pagePath: "../../pages/index/index",
      iconPath: "../../images/icon-1.png",
      selectedIconPath: "../../images/icon-1.png",
      text: "组件"
    }, {
      pagePath: "../../pages/getOpenId/index",
      iconPath: "../../images/icon-2.png",
      selectedIconPath: "../../images/icon-2.png",
      text: "接口ID"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})