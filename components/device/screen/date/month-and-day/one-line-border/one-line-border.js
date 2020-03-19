export default {
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
    justify () {
      if (this.$store.state.date.monthAndDay.oneLine.number.alignment.endsWith('Left')) {
        return 'start'
      } else if (this.$store.state.date.monthAndDay.oneLine.number.alignment.endsWith('Right')) {
        return 'end'
      } else {
        return 'center'
      }
    },
    numberImages () {
      return this.$store.state.date.monthAndDay.oneLine.number.images
    },
    spacing () {
      const spacing = this.$store.state.date.monthAndDay.oneLine.number.spacing
      return `margin-left: ${spacing}px;margin-right: ${spacing}px;`
    },
    position () {
      return {
        bottom: `${this.$store.state.device.size.height - this.$store.state.date.monthAndDay.oneLine.number.bottom}px`,
        left: `${this.$store.state.date.monthAndDay.oneLine.number.left}px`,
        right: `${this.$store.state.device.size.width - this.$store.state.date.monthAndDay.oneLine.number.right}px`,
        top: `${this.$store.state.date.monthAndDay.oneLine.number.top}px`
      }
    }
  }
}
