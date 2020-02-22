import background from '~/components/editor/background/background.vue'

export default {
  components: {
    background
  },
  computed: {
    model () {
      return this.$store.state.device.model
    },
    title () {
      return this.$t('background.title')
    }
  },
  head () {
    return {
      title: `${this.model} ${this.title}`
    }
  }
}
