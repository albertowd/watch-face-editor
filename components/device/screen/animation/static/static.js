export default {
  data () {
    return {
      index: 0,
      intervalId: null
    }
  },
  computed: {
    images () {
      return this.$store.state.animation.static.images
    },
    pauseMs () {
      return this.$store.state.animation.static.pause
    },
    position () {
      const staticAnim = this.$store.state.animation.static
      return {
        left: `${staticAnim.x}px`,
        top: `${staticAnim.y}px`
      }
    },
    speedMs () {
      return this.$store.state.animation.static.speed
    },
    timeMs () {
      return this.$store.state.animation.static.time
    }
  },
  methods: {
    pause () {
      this.stop()
      setTimeout(() => this.play(), this.pauseMs - this.speedMs)
    },
    play () {
      if (this.intervalId) {
        this.stop()
      }
      this.intervalId = setInterval(this.tick.bind(this), this.speedMs)
    },
    toggle () {
      this.intervalId ? this.stop() : this.play()
    },
    stop () {
      if (this.intervalId) {
        clearInterval(this.intervalId)
        this.intervalId = null
      }
    },
    tick () {
      this.index += 1
      if (this.index * this.speedMs > this.timeMs) {
        this.index = this.index % this.images.length
        this.pause()
      }
    }
  }
}
