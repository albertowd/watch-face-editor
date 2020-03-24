export default {
  computed: {
    image: {
      get () { return this.$store.state.activity.noDataImage },
      set (noDataImage) { this.$store.commit('activity/import', { noDataImage }) }
    },
    tTitle () {
      return this.$t('activity.noDataImage.title').toUpperCase()
    },
    tTitleDescription () {
      return this.$t('activity.noDataImage.titleDescription')
    }
  },
  methods: {
    imageFilePick () {
      if (this.image) {
        this.image = null
      } else {
        this.$refs.imageInput.click()
      }
    },
    imageFilePicked (event) {
      const file = event.target.files[0]
      this.$refs.imageInput.value = null

      if (file) {
        const fileReader = new FileReader()
        fileReader.onload = (event) => {
          this.image = event.target.result
        }
        fileReader.readAsDataURL(file)
      }
    }
  }
}
