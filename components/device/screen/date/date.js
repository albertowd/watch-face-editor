export default {
  data () {
    return {
      weekDayIndex: ((new Date()).getDay() + 6) % 7 // getDay first day is Sunday
    }
  },
  computed: {
    images () {
      return this.$store.state.date.weekDay.images
    },
    weekDayPosition () {
      const weekDay = this.$store.state.date.weekDay
      return {
        left: `${weekDay.x}px`,
        top: `${weekDay.y}px`
      }
    }
  },
  methods: {
    circleWeekDay () {
      this.weekDayIndex = (this.weekDayIndex + 1) % 7
    }
  }
}
