// import Vue from 'vue'

import info from '~/components/device/info/info.vue'
import preview from '~/components/device/preview/preview.vue'

export default {
  components: {
    info,
    preview
  },
  data () {
    return {
      device: this[`$${this.$route.params.name}`]
    }
  },
  head () {
    return {
      title: 'Device Information'
    }
  },
  validate ({ params }) {
    return ['GTS'].includes(params.name)
  }
}
