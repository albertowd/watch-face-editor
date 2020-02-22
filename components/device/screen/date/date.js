export default {
  data () {
    return {
      weekDayIndex: 0
    }
  },
  computed: {
    weekDay () {
      const weekDay = this.$store.state.date.weekDay
      if (weekDay.images.length <= this.weekDayIndex) {
        this.weekDayIndex = 0
      }
      return weekDay
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
