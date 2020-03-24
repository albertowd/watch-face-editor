import info from '~/components/editor/info/info.vue'

export default {
  components: {
    info
  },
  computed: {
    name () {
      const device = this.$store.state.device
      return `${device.vendor} ${device.model}`
    }
  },
  head () {
    return {
      title: this.name
    }
  }
}
