export default {
  props: {
    name: {
      default: 'alarm',
      type: String
    },
    store: {
      default: 'status',
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
    }
  },
  methods: {
    getStore () {
      return this.$store.state[this.store][this.name]
    },
    onFilePick () {
      if (this.enabled) {
        this.$store.commit(`${this.store}/toggle${this.name[0].toUpperCase() + this.name.slice(1)}`, false)
        this.$refs.imageInput.value = null
      } else {
        this.$refs.imageInput.click()
      }
    },
    onFilePicked (event) {
      const file = event.target.files[0]

      const fileReader = new FileReader()
      fileReader.addEventListener('load', (event) => {
        this.$store.commit(`${this.store}/change${this.name[0].toUpperCase() + this.name.slice(1)}Image`, event.target.result)
      })
      fileReader.readAsDataURL(file)
    },
    onXChange (x) {
      this.$store.commit(`${this.store}/change${this.name[0].toUpperCase() + this.name.slice(1)}X`, x)
    },
    onYChange (y) {
      this.$store.commit(`${this.store}/change${this.name[0].toUpperCase() + this.name.slice(1)}Y`, y)
    }
  }
}
