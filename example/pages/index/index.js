Page({
  data: {
    list: [
      {
        id: 'widget',
        name: '基础组件',
        open: false,
        pages: [
          {
<<<<<<< HEAD
              id: 'form',
              name: '表单',
              open: false,
              pages: ['button', 'list', 'input', 'slider', 'uploader','inputNumber']
          },
=======
            id: 'badge',
            name: 'Badge 徽章'
          }, {
            id: 'button',
            name: 'Button 按钮'
          }, {
            id: 'icon',
            name: 'Icon 图标'
          }
        ]
      }, {
        id: 'nav',
        name: '导航组件',
        open: false,
        pages: [
>>>>>>> tmp
          {
            id: 'cell',
            name: 'Cell 单元格'
          }, {
            id: 'tabs',
            name: 'Tabs 标签页'
          }
        ]
      }, {
        id: 'form',
        name: '表单',
        open: false,
        pages: [
          {
            id: 'checkbox',
            name: 'Checkbox 复选框'
          }, {
            id: 'input',
            name: 'Input 输入框'
          }, {
            id: 'input-number',
            name: 'InputNumber 计数器'
          }, {
            id: 'radio',
            name: 'Radio 单选框'
          }, {
            id: 'rate',
            name: 'Rate 评分'
          }, {
            id: 'search',
            name: 'Search 搜索'
          }, {
            id: 'switch',
            name: 'Switch 开关'
          }
        ]
      }, {
        id: 'feedback',
        name: '交互组件',
        open: false,
        pages: [
          {
            id: 'loading',
            name: 'Loading 加载指示器'
          }, {
            id: 'message-box',
            name: 'MessageBox 弹框'
          }, {
            id: 'slider',
            name: 'Slider 滑块'
          }, {
            id: 'toast',
            name: 'Toast 轻提示'
          }
        ]
      }, {
        id: 'show',
        name: '展示组件',
        open: false,
        pages: [
          {
            id: 'collapse',
            name: 'Collapse 折叠面板'
          }, {
            id: 'steps',
            name: 'Steps 步骤条'
          }, {
            id: 'tag',
            name: 'Tag 标签'
          }
        ]
      }
    ]
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id,
      list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  }
});