export default {
  data () {
    return {
      error: '',
      expanded: false,
      tab: 0
    }
  },
  computed: {
    coords: {
      get () { return this.$store.state.date.weekDayProgress.coords },
      set (coords) { this.$store.commit('date/weekDayProgress', coords) }
    },
    dimensions () {
      return {
        height: this.$store.state.device.size.height,
        width: this.$store.state.device.size.width
      }
    },
    images: {
      get () { return this.$store.state.date.weekDayProgress.images },
      set (images) { this.$store.commit('date/weekDayProgress', { images }) }
    },
    tPosition () {
      return this.$t('app.position')
    },
    tPositionDescription () {
      return this.$t('app.positionDescription')
    },
    tTitle () {
      return this.$t('date.weekDayProgress.title')
    },
    tTitleDescription () {
      return this.$t('date.weekDayProgress.titleDescription')
    },
    tWeekDay () {
      return {
        mon: this.$t('app.weekDay.mon'),
        fri: this.$t('app.weekDay.fri'),
        sat: this.$t('app.weekDay.sat'),
        sun: this.$t('app.weekDay.sun'),
        thu: this.$t('app.weekDay.thu'),
        tue: this.$t('app.weekDay.tue'),
        wed: this.$t('app.weekDay.wed')
      }
    },
    x: {
      get () { return this.coords[this.tab][0] },
      set (x) { this.changeX(x) }
    },
    y: {
      get () { return this.coords[this.tab][1] },
      set (y) { this.changeY(y) }
    }
  },
  methods: {
    changeX (x) {
      const coords = this.coords
      coords[this.tab][0] = x
      this.coords = coords
    },
    changeY (y) {
      const coords = this.coords
      coords[this.tab][1] = y
      this.coords = coords
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
    onFilePick () {
      if (this.images.length) {
        this.images = []
      } else {
        this.$refs.pngInput.click()
      }
    },
    onFilePicked (event) {
      const files = Object.values(event.target.files)
      this.$refs.pngInput.value = null
      this.error = ''

      if (files.length) {
        if (files.length === 7) {
          const promises = []

          for (const file of files) {
            promises.push(this.imagePromise(file))
          }

          Promise.all(promises).then((images) => {
            this.images = images
          })
        } else {
          this.error = this.$t('date.weekDayProgress.error')
        }
      }
    }
  }
}
