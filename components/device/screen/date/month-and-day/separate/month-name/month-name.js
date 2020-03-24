export default {
  data () {
    return {
      index: (new Date()).getMonth() // getMonth returns 0-11
    }
  },
  computed: {
    images () {
      return this.$store.state.date.monthAndDay.separate.monthName.images
    },
    position () {
      const monthName = this.$store.state.date.monthAndDay.separate.monthName
      return {
        left: `${monthName.x}px`,
        top: `${monthName.y}px`
      }
    }
  },
  methods: {
    circle () {
      this.index = (this.index + 1) % 12
    }
  }
}
