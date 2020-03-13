import monthAndDayTwoDigitsEditor from './month-and-day/two-digits/two-digits.vue'
import monthAndDayOneLineEditor from './month-and-day/one-line/one-line.vue'
import monthAndDaySeparateMonthNameEditor from './month-and-day/separate/month-name/month-name.vue'
import monthAndDaySeparateNumberEditor from './month-and-day/separate/number/number.vue'
import weekDayEditor from './week-day/week-day.vue'
import yearOneLineEditor from './year/one-line/one-line.vue'

export default {
  components: {
    monthAndDayTwoDigitsEditor,
    monthAndDayOneLineEditor,
    monthAndDaySeparateMonthNameEditor,
    monthAndDaySeparateNumberEditor,
    weekDayEditor,
    yearOneLineEditor
  },
  computed: {
    hasMonthAndDayOneLine () {
      return this.$store.state.device.features.date.monthAndDay.oneLine
    },
    hasMonthAndDaySeparateDay () {
      return this.$store.state.device.features.date.monthAndDay.separate.day
    },
    hasMonthAndDaySeparateMonth () {
      return this.$store.state.device.features.date.monthAndDay.separate.month
    },
    hasMonthAndDaySeparateMonthName () {
      return this.$store.state.device.features.date.monthAndDay.separate.monthName
    },
    hasWeekDay () {
      return this.$store.state.device.features.date.weekDay
    },
    hasWeekDayProgress () {
      return this.$store.state.device.features.date.weekDayProgress
    },
    hasYearOneLine () {
      return this.$store.state.device.features.date.year.oneLine
    }
  }
}
