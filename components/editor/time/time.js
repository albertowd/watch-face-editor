import numberEditor from './number/number.vue'

export default {
  components: {
    numberEditor
  },
  methods: {
    onNewImages (images) {
      if (!this.$refs.hoursEditor.onesImages.length) {
        this.$refs.hoursEditor.changeImages(images, 'hours', 'Ones')
      }
      if (!this.$refs.hoursEditor.tensImages.length) {
        this.$refs.hoursEditor.changeImages(images, 'hours', 'Tens')
      }
      if (!this.$refs.minutesEditor.onesImages.length) {
        this.$refs.minutesEditor.changeImages(images, 'minutes', 'Ones')
      }
      if (!this.$refs.minutesEditor.tensImages.length) {
        this.$refs.minutesEditor.changeImages(images, 'minutes', 'Tens')
      }
    }
  }
}
