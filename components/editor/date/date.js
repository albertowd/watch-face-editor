import numberEditor from './number/number.vue'
import monthNameEditor from './month-name/month-name.vue'
import oneLineEditor from './one-line/one-line.vue'
import weekDayEditor from './week-day/week-day.vue'

export default {
  components: {
    numberEditor,
    monthNameEditor,
    oneLineEditor,
    weekDayEditor
  },
  computed: {
    hasDay () {
      return this.$store.state.device.features.date.monthAndDay.separate.day
    },
    hasOneLine () {
      return this.$store.state.device.features.date.monthAndDay.oneLine
    },
    hasMonth () {
      return this.$store.state.device.features.date.monthAndDay.separate.month
    },
    hasMonthName () {
      return this.$store.state.device.features.date.monthAndDay.separate.monthName
    },
    hasWeekDay () {
      return this.$store.state.device.features.date.weekDay
    }
  }
}
