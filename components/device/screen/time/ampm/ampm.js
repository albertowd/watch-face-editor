export default {
  data () {
    return {
      index: new Date().getHours() < 12 ? 0 : 1
    }
  },
  computed: {
    images () {
      const images = []
      const count = Math.max(this.$store.state.time.ampm.imagesAM.length, this.$store.state.time.ampm.imagesPM.length)
      for (let index = 0; index < count; index++) {
        if (this.$store.state.time.ampm.imagesAM[index]) {
          images.push(this.$store.state.time.ampm.imagesAM[index])
        }
        if (this.$store.state.time.ampm.imagesPM[index]) {
          images.push(this.$store.state.time.ampm.imagesPM[index])
        }
      }
      return images
    },
    position () {
      return {
        left: `${this.$store.state.time.ampm.x}px`,
        top: `${this.$store.state.time.ampm.y}px`
      }
    }
  },
  methods: {
    changeImage () {
      this.index = (this.index + 1) % this.images.length
    }
  }
}
