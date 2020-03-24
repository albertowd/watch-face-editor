export default {
  data () {
    return {
      index: ((new Date()).getDay() + 6) % 7 // getDay first day is Sunday
    }
  },
  computed: {
    images () {
      return this.$store.state.date.weekDay.images
    },
    position () {
      const weekDay = this.$store.state.date.weekDay
      return {
        left: `${weekDay.x}px`,
        top: `${weekDay.y}px`
      }
    }
  },
  methods: {
    circle () {
      this.index = (this.index + 1) % 7
    }
  }
}
