export default {
  data () {
    return {
      dayIndex: (new Date()).getDate(), // getDate returns 1-31
      monthIndex: (new Date()).getMonth() + 1 // getMonth returns 0-11
    }
  },
  computed: {
    alignment () {
      switch (this.$store.state.date.monthAndDay.oneLine.number.alignment.split(' ')[0]) {
        case 'Bottom':
          return 'end'
        case 'Top':
          return 'start'
        default:
          return 'center'
      }
    },
    dayMajorImage () {
      return this.$store.state.date.monthAndDay.oneLine.number.images[this.dayIndex > 9 ? Math.floor(this.dayIndex / 10) : 0]
    },
    delimiterImage () {
      return this.$store.state.date.monthAndDay.oneLine.delimiterImage
    },
    justify () {
      switch (this.$store.state.date.monthAndDay.oneLine.number.alignment.split(' ')[1]) {
        case 'Left':
          return 'start'
        case 'Right':
          return 'end'
        default:
          return 'center'
      }
    },
    monthMajorImage () {
      return this.$store.state.date.monthAndDay.oneLine.number.images[this.monthIndex > 9 ? Math.floor(this.monthIndex / 10) : 0]
    },
    numberImages () {
      return this.$store.state.date.monthAndDay.oneLine.number.images
    },
    spacing () {
      const spacing = this.$store.state.date.monthAndDay.oneLine.number.spacing
      return `margin-left: ${spacing}px;margin-right: ${spacing}px;`
    },
    twoDigitDay () {
      return this.$store.state.date.monthAndDay.twoDigitDay
    },
    twoDigitMonth () {
      return this.$store.state.date.monthAndDay.twoDigitMonth
    },
    position () {
      return {
        bottom: `${this.$store.state.date.monthAndDay.oneLine.number.bottom}px`,
        left: `${this.$store.state.date.monthAndDay.oneLine.number.left}px`,
        right: `${this.$store.state.date.monthAndDay.oneLine.number.right}px`,
        top: `${this.$store.state.date.monthAndDay.oneLine.number.top}px`
      }
    }
  },
  methods: {
    circleDay () {
      this.dayIndex = this.dayIndex === 31 ? 1 : this.dayIndex + 1
    },
    circleMonth () {
      this.monthIndex = this.monthIndex === 12 ? 1 : this.monthIndex + 1
    }
  }
}
