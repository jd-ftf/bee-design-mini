Page({
  data: {
    show: false,
    name: ''
  },
  fade () {
    this.transition('fade')
  },
  fadeUp () {
    this.transition('fade-up')
  },
  fadeDown () {
    this.transition('fade-down')
  },
  fadeLeft () {
    this.transition('fade-left')
  },
  fadeRight () {
    this.transition('fade-right')
  },
  slideUp () {
    this.transition('slide-up')
  },
  slideDown () {
    this.transition('slide-down')
  },
  slideLeft () {
    this.transition('slide-left')
  },
  slideRight () {
    this.transition('slide-right')
  },
  zoomIn () {
    this.transition('zoom-in')
  },
  transition (name) {
    this.setData({
      name,
      show: true
    })
    setTimeout(() => {
      this.setData({
        show: false
      })
    }, 500)
  }
})