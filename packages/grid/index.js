import VueComponent from '../common/component'

VueComponent({
  props: {
    clickable: Boolean,
    square: Boolean,
    column: {
      type: Number,
      observer (newValue) {
        if (newValue <= 0) {
          throw Error('The number of columns attribute value is invalid. The attribute must be greater than 0 and it is not recommended to use a larger value attribute.')
        }
      }
    },
    border: {
      type: Boolean,
      value: false
    },
    bgColor: {
      type: String,
      value: '#ffffff'
    },
    gutter: Number
  },
  relations: {
    '../gridItem/index': {
      type: 'child',
      linked (target) {
        this.children = this.children || []
        this.children.push(target)
      },
      unlinked (target) {
        this.children = this.children.filter(child => child !== target)
      }
    }
  },
  mounted () {
    console.log(this.data.bgColor)
    if (!this.data.border) return
    const { length } = this.children
    this.children.forEach((item, index) => {
      const { column } = this.data
      if (column) {
        const isRightItem = length - 1 === index || (index + 1) % column === 0
        const isFirstLine = (index + 1) <= column

        isFirstLine && item.set('itemClass', 'is-first')
        isRightItem && item.set('itemClass', 'is-right')
        !isFirstLine && item.set('itemClass', 'is-border')
      } else {
        item.set('itemClass', 'is-first')
      }
      length - 1 === index && item.set('itemClass', item.data.itemClass + ' is-last')
    })
  }
})