import screenActivityCaloriesNumber from './activity/calories/number/number.vue'
import screenActivityDistanceNumber from './activity/distance/number/number.vue'
import screenActivityPulseNumber from './activity/pulse/number/number.vue'
import screenActivityStepsNumber from './activity/steps/number/number.vue'
import screenAnimationStatic from './animation/static/static.vue'
import screenBackground from './background/background.vue'
import screenBatteryIcons from './battery/icons/icons.vue'
import screenBatteryImages from './battery/images/images.vue'
import screenBatteryPercent from './battery/percent/percent.vue'
import screenBatteryText from './battery/text/text.vue'
import screenDateMonthAndDaySeparateMonthName from './date/month-and-day/separate/month-name/month-name.vue'
import screenDateMonthAndDaySeparateNumber from './date/month-and-day/separate/number/number.vue'
import screenDateMonthAndDayOneLine from './date/month-and-day/one-line/one-line.vue'
import screenDateWeekDay from './date/week-day/week-day.vue'
import screenDateWeekDayProgress from './date/week-day-progress/week-day-progress.vue'
import screenDateYearOneLine from './date/year/one-line/one-line.vue'
import screenTime from './time/time.vue'
import screenTimeAMPM from './time/ampm/ampm.vue'
import screenTimeDelimiter from './time/delimiter/delimiter.vue'
import screenShortcut from './shortcut/shortcut.vue'
import screenStatus from './status/status.vue'

export default {
  components: {
    screenActivityCaloriesNumber,
    screenActivityDistanceNumber,
    screenActivityPulseNumber,
    screenActivityStepsNumber,
    screenAnimationStatic,
    screenBackground,
    screenBatteryIcons,
    screenBatteryImages,
    screenBatteryText,
    screenBatteryPercent,
    screenDateMonthAndDayOneLine,
    screenDateMonthAndDaySeparateMonthName,
    screenDateMonthAndDaySeparateNumber,
    screenDateWeekDay,
    screenDateWeekDayProgress,
    screenDateYearOneLine,
    screenTime,
    screenTimeAMPM,
    screenTimeDelimiter,
    screenShortcut,
    screenStatus
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
