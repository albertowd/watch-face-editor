import statusEditor from '~/components/editor/status/status.vue'

export default {
  components: {
    statusEditor
  },
  computed: {
    model () {
      return this.$store.state.device.model
    },
    title () {
      return this.$t('status.title')
    }
  },
  head () {
    return {
      title: `${this.model} ${this.title}`
    }
  }
}
