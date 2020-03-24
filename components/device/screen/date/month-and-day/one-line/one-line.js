export default {
  data () {
    return {
      dayIndex: (new Date()).getDate(), // getDate returns 1-31
      monthIndex: (new Date()).getMonth() + 1 // getMonth returns 0-11
    }
  },
  computed: {
    alignment () {
      if (this.$store.state.date.monthAndDay.oneLine.number.alignment.startsWith('Bottom')) {
        return 'end'
      } else if (this.$store.state.date.monthAndDay.oneLine.number.alignment.startsWith('Top')) {
        return 'start'
      } else {
        return 'center'
      }
    },
    dayMajorImage () {
      return this.twoDigitsDay ? this.$store.state.date.monthAndDay.oneLine.number.images[Math.floor(this.dayIndex / 10)] : null
    },
    delimiterImage () {
      return this.$store.state.date.monthAndDay.oneLine.delimiterImage
    },
    justify () {
      if (this.$store.state.date.monthAndDay.oneLine.number.alignment.endsWith('Left')) {
        return 'start'
      } else if (this.$store.state.date.monthAndDay.oneLine.number.alignment.endsWith('Right')) {
        return 'end'
      } else {
        return 'center'
      }
    },
    monthMajorImage () {
      return this.twoDigitsMonth ? this.$store.state.date.monthAndDay.oneLine.number.images[Math.floor(this.monthIndex / 10)] : null
    },
    numberImages () {
      return this.$store.state.date.monthAndDay.oneLine.number.images
    },
    spacing () {
      const spacing = this.$store.state.date.monthAndDay.oneLine.number.spacing
      return `margin-left: ${spacing}px;margin-right: ${spacing}px;`
    },
    twoDigitsDay () {
      return this.$store.state.date.monthAndDay.twoDigitsDay || this.dayIndex > 9
    },
    twoDigitsMonth () {
      return this.$store.state.date.monthAndDay.twoDigitsMonth || this.monthIndex > 9
    },
    position () {
      return {
        bottom: `${this.$store.state.device.size.height - this.$store.state.date.monthAndDay.oneLine.number.bottom}px`,
        left: `${this.$store.state.date.monthAndDay.oneLine.number.left}px`,
        right: `${this.$store.state.device.size.width - this.$store.state.date.monthAndDay.oneLine.number.right}px`,
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
