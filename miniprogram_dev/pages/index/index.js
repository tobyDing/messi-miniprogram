
Page({
  data: {
    list: [
      {
        id: 'Base Component',
        name: '基础组件',
        icon: 'messifont-base',
        open: false,
        child: ['icon', 'button', 'layout', 'image', 'cell'],
        devChild: ['tab']
      },
      {
        id: 'Data Entry',
        name: '数据输入',
        icon: 'messifont-entry',
        open: false,
        child: ['field', 'picker'],
        devChild: ['tab']
      },
      {
        id: 'Data Display',
        name: '数据展示',
        icon: 'messifont-display',
        open: false,
        child: ['noticebar', 'listview'],
        devChild: [],
      },
      {
        id: 'Feedback',
        name: '操作反馈',
        icon: 'messifont-success',
        open: false,
        child: ['toast', 'message', 'dialog', 'actionsheet'],
        devChild: ['half-screen-dialog'],
      },
      {
        id: 'Gesture',
        name: '手势操作',
        icon: 'messifont-gesture',
        open: false,
        child: ['slideview'],
        devChild: [],
      }
    ]
  },
  onSwitch(ev) {
    const { dataset: { index } } = ev.currentTarget
    const { list } = this.data;
    list[index].open = !list[index].open
    this.setData({
      list
    })
  },
  onJump(ev) {
    const { dataset: { txt } } = ev.currentTarget
    wx.navigateTo({
      url: `/pages/example/${txt}/${txt}`
    })
  }
})
