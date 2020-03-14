export default {
  props: {
    name: {
      default: 'day',
      type: String
    }
  },
  data () {
    return {
      index: this.name === 'day' ? (new Date()).getDate() : (new Date()).getMonth() + 1 // getDate returns 1-31, getMonth returns 0-11
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
    majorImage () {
      return this.twoDigits ? this.$store.state.date.monthAndDay.separate[this.name].images[Math.floor(this.index / 10)] : null
    },
    spacing () {
      const spacing = this.$store.state.date.monthAndDay.separate[this.name].spacing
      return `margin-left: ${spacing}px;margin-right: ${spacing}px;`
    },
    twoDigits () {
      return (this.name === 'day' ? this.$store.state.date.monthAndDay.twoDigitsDay : this.$store.state.date.monthAndDay.twoDigitsMonth) || this.index > 9
    },
    position () {
      return {
        bottom: `${this.$store.state.device.size.height - this.$store.state.date.monthAndDay.separate[this.name].bottom}px`,
        left: `${this.$store.state.date.monthAndDay.separate[this.name].left}px`,
        right: `${this.$store.state.device.size.width - this.$store.state.date.monthAndDay.separate[this.name].right}px`,
        top: `${this.$store.state.date.monthAndDay.separate[this.name].top}px`
      }
    }
  },
  methods: {
    circle () {
      if (this.name === 'day') {
        this.index = this.index === 31 ? 1 : this.index + 1
      } else {
        this.index = this.index === 12 ? 1 : this.index + 1
      }
    }
  }
}
