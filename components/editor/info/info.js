export default {
  computed: {
    device () {
      return {
        packLimit: this.$t('device.packLimit'),
        screen: this.$t('device.screen')
      }
    },
    height () {
      return this.$store.state.device.dimensions.height
    },
    limit () {
      return this.$store.state.device.packLimit
    },
    name () {
      const device = this.$store.state.device
      return `${device.vendor} ${device.model}`
    },
    width () {
      return this.$store.state.device.dimensions.width
    }
  }
}
