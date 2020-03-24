export default {
  data () {
    return {
      elapsed: 0,
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
      const waitTime = this.pauseMs - this.speedMs

      if (waitTime > 0) {
        this.stop(false)
        setTimeout(() => {
          this.elapsed += this.speedMs
          this.play()
        }, waitTime)
      } else {
        this.index = 0
      }
    },
    play () {
      if (this.intervalId) {
        this.stop(true)
      }

      this.index = 0
      this.intervalId = setInterval(this.tick.bind(this), this.speedMs)
    },
    toggle () {
      this.intervalId ? this.stop(true) : this.play()
    },
    stop (reset) {
      if (this.intervalId) {
        clearInterval(this.intervalId)
        this.intervalId = null
      }

      if (reset) {
        this.elapsed = 0
      }
    },
    tick () {
      this.elapsed += this.speedMs

      if (this.timeMs && this.elapsed > this.timeMs) {
        this.stop(true)
      } else {
        const next = (this.index + 1) % this.images.length

        if (next === 0) {
          this.pause()
        } else {
          this.index = next
        }
      }
    }
  }
}
