export default {
  data () {
    return {
      year: (new Date()).getFullYear()
    }
  },
  computed: {
    alignment () {
      switch (this.$store.state.date.year.oneLine.number.alignment.split(' ')[0]) {
        case 'Bottom':
          return 'end'
        case 'Top':
          return 'start'
        default:
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
      switch (this.$store.state.date.year.oneLine.number.alignment.split(' ')[1]) {
        case 'Left':
          return 'start'
        case 'Right':
          return 'end'
        default:
          return 'center'
      }
    },
    milleniumImage () {
      return this.images[Math.floor(this.year / 1000)]
    },
    position () {
      return {
        bottom: `${this.$store.state.date.year.oneLine.number.bottom}px`,
        left: `${this.$store.state.date.year.oneLine.number.left}px`,
        right: `${this.$store.state.date.year.oneLine.number.right}px`,
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
