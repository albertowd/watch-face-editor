export default {
  props: {
    name: {
      default: 'background',
      type: String
    }
  },
  computed: {
    enabled () {
      return this.getStore().enabled
    },
    image () {
      return this.getStore().image
    },
    position () {
      const image = this.getStore()
      return {
        left: `${image.x}px`,
        top: `${image.y}px`
      }
    }
  },
  methods: {
    getStore () {
      const splitted = this.name.split('.')
      let store = this.$store.state
      for (const name of splitted) {
        store = store[name]
      }
      return store
    }
  }
}
