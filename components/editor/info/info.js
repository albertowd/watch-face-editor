export default {
  data () {
    return {
      json: null
    }
  },
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
      this.$zipUnpacked(this.$converter.fromDevice(this.getDevice(), this.$store.state.device.features), undefined, (content, name) => {
        const link = document.createElement('a')
        link.href = window.URL.createObjectURL(content)
        link.download = name

        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      })
    },
    getDevice () {
      return this.$vuexToObj({
        activity: this.$store.state.activity,
        animation: this.$store.state.animation,
        background: this.$store.state.background,
        battery: this.$store.state.battery,
        clock: this.$store.state.clock,
        date: this.$store.state.date,
        status: this.$store.state.status,
        time: this.$store.state.time,
        weather: this.$store.state.weather
      })
    },
    pickFiles () {
      this.$refs.jsonInput.click()
    },
    setDevice (images = []) {
      const device = this.$converter.toDevice(this.getDevice(), this.$store.state.device.features, { images, ...this.obj })
      this.$store.commit('activity/activity', device.activity)
      this.$store.commit('animation/animation', device.animation)
      this.$store.commit('background/background', device.background)
      this.$store.commit('battery/battery', device.battery)
      this.$store.commit('clock/clock', device.clock)
      this.$store.commit('date/date', device.date)
      this.$store.commit('status/status', device.status)
      this.$store.commit('time/time', device.time)
      this.$store.commit('weather/weather', device.weather)

      const obj = this.$converter.fromDevice(device, this.$store.state.device.features)
      delete obj.images
      this.$store.commit('json/json', { content: JSON.stringify(obj, null, 4), example: false })
    },
    uploadJSON (event) {
      const file = event.target.files[0]
      this.$refs.jsonInput.value = null

      if (file) {
        const fileReader = new FileReader()
        fileReader.onload = (event) => {
          this.obj = JSON.parse(event.target.result)
          this.$refs.pngInput.click()
        }
        fileReader.readAsText(file)
      }
    },
    uploadPNGs (event) {
      const files = Object.values(event.target.files)
      this.$refs.pngInput.value = null

      if (files.length) {
        const promises = []

        for (const file of files) {
          promises.push(new Promise((resolve) => {
            const fileReader = new FileReader()
            fileReader.onload = (event) => {
              resolve(event.target.result)
            }
            fileReader.readAsDataURL(file)
          }))
        }

        Promise.all(promises).then((images) => {
          this.setDevice(images)
        })
      } else {
        this.setDevice()
      }
    }
  }
}
