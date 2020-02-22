export default {
  computed: {
    device () {
      return {
        packLimit: this.$t('device.packLimit'),
        screen: this.$t('device.screen')
      }
    },
    height () {
      return this.$store.state.device.size.height
    },
    limit () {
      return this.$store.state.device.packLimit
    },
    name () {
      const device = this.$store.state.device
      return `${device.vendor} ${device.model}`
    },
    tExport () {
      return this.$t('device.export')
    },
    tImport () {
      return this.$t('device.import')
    },
    width () {
      return this.$store.state.device.size.width
    }
  },
  methods: {
    exportZip () {
      const device = {
        activity: this.$store.state.activity,
        animation: this.$store.state.animation,
        background: this.$store.state.background,
        battery: this.$store.state.battery,
        clock: this.$store.state.clock,
        date: this.$store.state.date,
        status: this.$store.state.status,
        time: this.$store.state.time,
        weather: this.$store.state.weather
      }
      this.$zipUnpacked(this.$converter.fromDevice(device), undefined, (content, name) => {
        const link = document.createElement('a')
        link.href = window.URL.createObjectURL(content)
        link.download = name

        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      })
    },
    importFiles () {

    }
  }
}
