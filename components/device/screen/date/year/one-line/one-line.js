export default {
  data () {
    return {
      year: (new Date()).getFullYear()
    }
  },
  computed: {
    alignment () {
      if (this.$store.state.date.year.oneLine.number.alignment.startsWith('Bottom')) {
        return 'end'
      } else if (this.$store.state.date.year.oneLine.number.alignment.startsWith('Top')) {
        return 'start'
      } else {
        return 'center'
      }
    },
    centuryImage () {
      return this.images[Math.floor(this.year % 1000 / 100)]
    },
    decadeImage () {
      return this.images[Math.floor(this.year % 100 / 10)]
    },
    images () {
      return this.$store.state.date.year.oneLine.number.images
    },
    justify () {
      if (this.$store.state.date.year.oneLine.number.alignment.endsWith('Left')) {
        return 'start'
      } else if (this.$store.state.date.year.oneLine.number.alignment.endsWith('Right')) {
        return 'end'
      } else {
        return 'center'
      }
    },
    milleniumImage () {
      return this.images[Math.floor(this.year / 1000)]
    },
    position () {
      return {
        bottom: `${this.$store.state.device.size.height - this.$store.state.date.year.oneLine.number.bottom}px`,
        left: `${this.$store.state.date.year.oneLine.number.left}px`,
        right: `${this.$store.state.device.size.width - this.$store.state.date.year.oneLine.number.right}px`,
        top: `${this.$store.state.date.year.oneLine.number.top}px`
      }
    },
    spacing () {
      const spacing = this.$store.state.date.year.oneLine.number.spacing
      return `margin-left: ${spacing}px;margin-right: ${spacing}px;`
    },
    yearImage () {
      return this.images[this.year % 10]
    }
  },
  methods: {
    circle () {
      this.year += 1
    }
  }
}
