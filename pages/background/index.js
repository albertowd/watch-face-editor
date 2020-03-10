import backgroundEditor from '~/components/editor/background/background.vue'

export default {
  components: {
    backgroundEditor
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
