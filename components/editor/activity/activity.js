import distanceNumberEditor from './distance/number/number.vue'
import caloriesNumberEditor from './calories/number/number.vue'
import noDataEditor from './no-data/no-data.vue'
import pulseNumberEditor from './pulse/number/number.vue'
import stepsNumberEditor from './steps/number/number.vue'

export default {
  components: {
    caloriesNumberEditor,
    distanceNumberEditor,
    noDataEditor,
    pulseNumberEditor,
    stepsNumberEditor
  },
  computed: {
    hasCaloriesGraph () {
      return this.$store.state.device.features.activity.calories.graph
    },
    hasCaloriesNumber () {
      return this.$store.state.device.features.activity.calories.number
    },
    hasDistanceNumber () {
      return this.$store.state.device.features.activity.distance.number
    },
    hasNoDataImage () {
      return this.$store.state.device.features.activity.noDataImage
    },
    hasPulseGraph () {
      return this.$store.state.device.features.activity.pulse.graph
    },
    hasPulseImages () {
      return this.$store.state.device.features.activity.pulse.images
    },
    hasPulseMeter () {
      return this.$store.state.device.features.activity.pulse.meter
    },
    hasPulseNumber () {
      return this.$store.state.device.features.activity.pulseNumber
    },
    hasStepsGoal () {
      return this.$store.state.device.features.activity.steps.goal
    },
    hasStepsImage () {
      return this.$store.state.device.features.activity.steps.image
    },
    hasStepsNumber () {
      return this.$store.state.device.features.activity.steps.number
    }
  }
}
