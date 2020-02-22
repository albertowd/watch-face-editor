import weekDayEditor from './week-day/week-day.vue'

export default {
  components: {
    weekDayEditor
  },
  computed: {
    hasMonthAndDay () {
      return this.$store.state.device.features.date.monthAndDay
    },
    hasWeekDay () {
      return this.$store.state.device.features.date.weekDay
    }
  }
}
