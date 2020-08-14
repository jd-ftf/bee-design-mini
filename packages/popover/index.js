import VueComponent from '../common/component'
import popover from '../mixins/popover'

/**
 * 注意点：
 * 1. 需要控制的位置： 12个
 * 2. 每一个位置改变都需要控制：
 * popLeft(弹出坐标x)/ popTop(弹出坐标Y)/ arrowStyle(三角形位置以及尖角朝向)
 * 尖角朝向class控制，弹出框用js控制
 */
VueComponent({
  mixins: [popover()],
  data: {
    selector: 'popover',
    arrowClass: 'wd-popover__arrow'
  },
  props: {
    // menu || normal
    mode: {
      type: String,
      value: 'normal'
    }
  },
  methods: {
    menuClick (event) {
      this.setData({ show: false })
      this.$emit('menu-click', event.currentTarget.dataset)
    }
  }
})