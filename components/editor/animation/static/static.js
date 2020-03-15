export default {
  data () {
    return {
      expanded: false
    }
  },
  computed: {
    dimensions () {
      return {
        height: this.$store.state.device.size.height,
        width: this.$store.state.device.size.width
      }
    },
    images: {
      get () { return this.$store.state.animation.static.images },
      set (images) { this.changeStatic({ images }) }
    },
    pause: {
      get () { return this.$store.state.animation.static.pause },
      set (pause) { this.changeStatic({ pause }) }
    },
    speed: {
      get () { return this.$store.state.animation.static.speed },
      set (speed) { this.changeStatic({ speed }) }
    },
    timeMs: {
      get () { return this.$store.state.animation.static.time },
      set (time) { this.changeStatic({ time }) }
    },
    tMilliseconds () {
      return this.$t('app.milliseconds')
    },
    tPause () {
      return this.$t('animation.pause')
    },
    tPauseDescription () {
      return this.$t('animation.pauseDescription')
    },
    tPosition () {
      return this.$t('app.position')
    },
    tPositionDescription () {
      return this.$t('app.positionDescription')
    },
    tSpeed () {
      return this.$t('animation.speed')
    },
    tSpeedDescription () {
      return this.$t('animation.speedDescription')
    },
    tTime () {
      return this.$t('animation.time')
    },
    tTimeDescription () {
      return this.$t('animation.timeDescription')
    },
    tTitle () {
      return this.$t('animation.static.title')
    },
    tTitleDescription () {
      return this.$t('animation.static.titleDescription')
    },
    x: {
      get () { return this.$store.state.animation.static.x },
      set (x) { this.changeStatic({ x }) }
    },
    y: {
      get () { return this.$store.state.animation.static.y },
      set (y) { this.changeStatic({ y }) }
    }
  },
  methods: {
    changeStatic (obj) {
      this.$store.commit('animation/static', obj)
    },
    imagePromise (file) {
      return new Promise((resolve) => {
        const fileReader = new FileReader()
        fileReader.onload = (event) => {
          resolve(event.target.result)
        }
        fileReader.readAsDataURL(file)
      })
    },
    pickImages () {
      if (this.images.lenght) {
        this.images = []
      } else {
        this.$refs.imagesInput.click()
      }
    },
    uploadImages (event) {
      const files = Object.values(event.target.files)
      this.$refs.imagesInput.value = null

      const promises = []

      for (const file of files) {
        promises.push(this.imagePromise(file))
      }

      Promise.all(promises).then((images) => {
        this.images = images
      })
    }
  }
}
