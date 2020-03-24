import iconEditor from './icon/icon.vue'

export default {
  components: {
    iconEditor
  },
  computed: {
    hasAlarm () {
      return this.$store.state.device.features.status.alarm
    },
    hasBluetooth () {
      return this.$store.state.device.features.status.bluetooth
    },
    hasDND () {
      return this.$store.state.device.features.status.dnd
    },
    hasLock () {
      return this.$store.state.device.features.status.lock
    }
  }
}
