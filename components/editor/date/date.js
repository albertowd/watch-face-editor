import oneLine from './one-line/one-line.vue'
import weekDayEditor from './week-day/week-day.vue'

export default {
  components: {
    oneLine,
    weekDayEditor
  },
  computed: {
    hasOneLine () {
      return this.$store.state.device.features.date.monthAndDay.oneLine
    },
    hasSeparate () {
      return this.$store.state.device.features.date.monthAndDay.separate
    },
    hasWeekDay () {
      return this.$store.state.device.features.date.weekDay
    }
  }
}
