export default {
  props: {
    name: {
      default: 'day',
      type: String
    }
  },
  computed: {
    alignment () {
      switch (this.$store.state.date.monthAndDay.separate[this.name].alignment.split(' ')[0]) {
        case 'Bottom':
          return 'end'
        case 'Top':
          return 'start'
        default:
          return 'center'
      }
    },
    justify () {
      switch (this.$store.state.date.monthAndDay.separate[this.name].alignment.split(' ')[1]) {
        case 'Left':
          return 'start'
        case 'Right':
          return 'end'
        default:
          return 'center'
      }
    },
    images () {
      return this.$store.state.date.monthAndDay.separate[this.name].images
    },
    spacing () {
      const spacing = this.$store.state.date.monthAndDay.separate[this.name].spacing
      return `margin-left: ${spacing}px;margin-right: ${spacing}px;`
    },
    position () {
      return {
        bottom: `${this.$store.state.device.size.height - this.$store.state.date.monthAndDay.separate[this.name].bottom}px`,
        left: `${this.$store.state.date.monthAndDay.separate[this.name].left}px`,
        right: `${this.$store.state.device.size.width - this.$store.state.date.monthAndDay.separate[this.name].right}px`,
        top: `${this.$store.state.date.monthAndDay.separate[this.name].top}px`
      }
    }
  }
}
