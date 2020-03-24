import shortcutsEditor from '~/components/editor/shortcuts/shortcuts.vue'

export default {
  components: {
    shortcutsEditor
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
