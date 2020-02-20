export default {
  props: {
    name: {
      default: '',
      type: String
    },
    store: {
      default: 'background',
      type: String
    },
    title: {
      default: 'Positioned Image',
      type: String
    }
  },
  computed: {
    dimensions () {
      return {
        height: this.$store.state.device.dimensions.height,
        width: this.$store.state.device.dimensions.width
      }
    },
    enabled () {
      return this.getStore().enabled
    },
    position () {
      const x = this.getStore().x
      const y = this.getStore().y
      return { x, y }
    },
    subName () {
      return this.name ? this.name[0].toUpperCase() + this.name.slice(1) : ''
    },
    tClear () {
      const subName = this.subName ? `.${this.subName.toLowerCase()}` : ''
      return this.$t(`${this.store}${subName}.clear`)
    },
    tPosition () {
      const subName = this.subName ? `.${this.subName.toLowerCase()}` : ''
      return this.$t(`${this.store}${subName}.position`)
    },
    tTitle () {
      const subName = this.subName ? `.${this.subName.toLowerCase()}` : ''
      return this.$t(`${this.store}${subName}.title`)
    }
  },
  methods: {
    getStore () {
      return this.name ? this.$store.state[this.store][this.name] : this.$store.state[this.store]
    },
    onFilePick () {
      if (this.enabled) {
        this.$store.commit(`${this.store}/toggle${this.subName}`, false)
        this.$refs.imageInput.value = null
      } else {
        this.$refs.imageInput.click()
      }
    },
    onFilePicked (event) {
      const file = event.target.files[0]

      const fileReader = new FileReader()
      fileReader.addEventListener('load', (event) => {
        this.$store.commit(`${this.store}/change${this.subName}Image`, event.target.result)
      })
      fileReader.readAsDataURL(file)
    },
    onXChange (x) {
      this.$store.commit(`${this.store}/change${this.subName}X`, x)
    },
    onYChange (y) {
      this.$store.commit(`${this.store}/change${this.subName}Y`, y)
    }
  }
}
