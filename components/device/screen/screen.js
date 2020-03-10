import background from './background/background.vue'
import screenDateMonthName from './date/month-name/month-name.vue'
import screenDateNumber from './date/number/number.vue'
import screenDateOneLine from './date/one-line/one-line.vue'
import screenDateWeekDay from './date/week-day/week-day.vue'
import screenTime from './time/time.vue'
import screenTimeAMPM from './time/ampm/ampm.vue'
import screenTimeDelimiter from './time/delimiter/delimiter.vue'
import shortcut from './shortcut/shortcut.vue'
import status from './status/status.vue'

export default {
  components: {
    background,
    screenDateMonthName,
    screenDateNumber,
    screenDateOneLine,
    screenDateWeekDay,
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
