import background from './background/background.vue'
import screenDateMonthAndDaySeparateMonthName from './date/month-and-day/separate/month-name/month-name.vue'
import screenDateMonthAndDaySeparateNumber from './date/month-and-day/separate/number/number.vue'
import screenDateMonthAndDayOneLine from './date/month-and-day/one-line/one-line.vue'
import screenDateWeekDay from './date/week-day/week-day.vue'
// import screenDateWeekDayProgress from './date/week-day-progress/week-day-progress.vue'
import screenDateYearOneLine from './date/year/one-line/one-line.vue'
import screenTime from './time/time.vue'
import screenTimeAMPM from './time/ampm/ampm.vue'
import screenTimeDelimiter from './time/delimiter/delimiter.vue'
import shortcut from './shortcut/shortcut.vue'
import status from './status/status.vue'

export default {
  components: {
    background,
    screenDateMonthAndDayOneLine,
    screenDateMonthAndDaySeparateMonthName,
    screenDateMonthAndDaySeparateNumber,
    screenDateWeekDay,
    screenDateYearOneLine,
    screenTime,
    screenTimeAMPM,
    screenTimeDelimiter,
    shortcut,
    status
  },
  computed: {
    model () {
      return this.$store.state.device.model
    },
    size () {
      const device = this.$store.state.device
      return {
        height: `${device.size.height}px`,
        width: `${device.size.width}px`
      }
    }
  }
}
