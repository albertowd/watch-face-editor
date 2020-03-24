export default {
  data () {
    return {
      index: ((new Date()).getDay() + 6) % 7 // getDay first day is Sunday
    }
  },
  computed: {
    coords () {
      return this.$store.state.date.weekDayProgress.coords
    },
    images () {
      return this.$store.state.date.weekDayProgress.images
    },
    position () {
      return {
        left: `${this.coords[this.index][0]}px`,
        top: `${this.coords[this.index][1]}px`
      }
    }
  },
  methods: {
    circle () {
      this.index = (this.index + 1) % 7
    }
  }
}
