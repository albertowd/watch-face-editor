import ampm from './ampm/ampm.vue'
import delimiter from './delimiter/delimiter.vue'
import numberEditor from './number/number.vue'

export default {
  components: {
    ampm,
    delimiter,
    numberEditor
  },
  computed: {
    hasAmPm () {
      return this.$store.state.device.features.time.ampm
    },
    hasDelimiter () {
      return this.$store.state.device.features.time.delimiter
    },
    hasHours () {
      return this.$store.state.device.features.time.hours
    },
    hasMinutes () {
      return this.$store.state.device.features.time.minutes
    },
    hasSeconds () {
      return this.$store.state.device.features.time.seconds
    }
  },
  methods: {
    onNewImages (images) {
      if (!this.$refs.hoursEditor.onesImages.length) {
        this.$refs.hoursEditor.change({ images }, 'Ones')
      }
      if (!this.$refs.hoursEditor.tensImages.length) {
        this.$refs.hoursEditor.change({ images }, 'Tens')
      }
      if (!this.$refs.minutesEditor.onesImages.length) {
        this.$refs.minutesEditor.change({ images }, 'Ones')
      }
      if (!this.$refs.minutesEditor.tensImages.length) {
        this.$refs.minutesEditor.change({ images }, 'Tens')
      }
      if (!this.$refs.secondsEditor.onesImages.length) {
        this.$refs.secondsEditor.change({ images }, 'Ones')
      }
      if (!this.$refs.secondsEditor.tensImages.length) {
        this.$refs.secondsEditor.change({ images }, 'Tens')
      }
    }
  }
}
