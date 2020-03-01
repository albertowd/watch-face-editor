import shortcuts from '~/components/editor/shortcuts/shortcuts.vue'

export default {
  components: {
    shortcuts
  },
  computed: {
    model () {
      return this.$store.state.device.model
    },
    title () {
      return this.$t('shortcuts.title')
    }
  },
  head () {
    return {
      title: `${this.model} ${this.title}`
    }
  }
}
