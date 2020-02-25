export default {
  data () {
    return {
      json: null
    }
  },
  computed: {
    changed () {
      return this.$store.state.json.changed
    },
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
      const converter = this.$converters[this.$store.state.device.alias]
      const device = this.$packDevice(this.$store.state)
      const pack = converter.fromDevice(device, this.$store.state.device.features)
      this.$zipUnpacked(pack, undefined, (content, name) => {
        const link = document.createElement('a')
        link.href = window.URL.createObjectURL(content)
        link.download = name

        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      })
    },
    pickFiles () {
      this.$refs.jsonInput.click()
    },
    setDevice (images = []) {
      const converter = this.$converters[this.$store.state.device.alias]
      const pack = this.$packDevice(this.$store.state)
      const device = converter.toDevice(pack, this.$store.state.device.features, { images, ...this.obj })
      this.$unpackDevice(device, this.$store)

      const obj = converter.fromDevice(device, this.$store.state.device.features)
      delete obj.images
      this.$store.commit('json/json', { changed: true, parsed: JSON.stringify(obj, null, 4) })
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
          promises.push(this.uploadPormise(file))
        }

        Promise.all(promises).then((images) => {
          this.setDevice(images)
        })
      } else {
        this.setDevice()
      }
    },
    uploadPormise (file) {
      return new Promise((resolve) => {
        const fileReader = new FileReader()
        fileReader.onload = (event) => {
          resolve(event.target.result)
        }
        fileReader.readAsDataURL(file)
      })
    }
  }
}
