export const state = () => ({
  calories: {
    number: {
      alignment: 'Center',
      bottom: 315,
      images: [],
      left: 15,
      right: 100,
      spacing: 0,
      top: 275
    }
  },
  distance: {
    decimalImage: null,
    number: {
      alignment: 'Center',
      bottom: 245,
      images: [],
      left: 15,
      right: 115,
      spacing: 0,
      top: 205
    },
    kmImage: null
  },
  pulse: {
    number: {
      alignment: 'Center',
      bottom: 315,
      images: [],
      left: 15,
      right: 100,
      spacing: 0,
      top: 275
    }
  },
  noDataImage: null,
  steps: {
    image: {
      image: null,
      x: 0,
      y: 0
    },
    goal: {
      alignment: 'Center',
      bottom: 315,
      images: [],
      left: 15,
      right: 100,
      spacing: 0,
      top: 275
    },
    number: {
      alignment: 'Center',
      bottom: 315,
      images: [],
      left: 15,
      right: 100,
      spacing: 0,
      top: 275
    }
  }
})

export const mutations = {
  /**
   * Updates new calories options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New calories options.
   */
  calories (state, obj) {
    for (const prop in obj) {
      if (prop === 'number') {
        this.commit('activity/caloriesNumber', obj[prop])
      } else {
        state.calories[prop] = obj[prop]
      }
    }
    this.commit('json/changed', true)
  },
  /**
   * Updates new calories number options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New calories number options.
   */
  caloriesNumber (state, obj) {
    for (const prop in obj) {
      state.calories.number[prop] = obj[prop]
    }
    this.commit('json/changed', true)
  },
  /**
   * Updates new distance options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New distance options.
   */
  distance (state, obj) {
    for (const prop in obj) {
      if (prop === 'number') {
        this.commit('activity/distanceNumber', obj[prop])
      } else {
        state.distance[prop] = obj[prop]
      }
    }
    this.commit('json/changed', true)
  },
  /**
   * Updates new distance number options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New distance number options.
   */
  distanceNumber (state, obj) {
    for (const prop in obj) {
      state.distance.number[prop] = obj[prop]
    }
    this.commit('json/changed', true)
  },
  /**
   * Imports activities options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New activities options.
   */
  import (state, obj) {
    if (obj.calories) {
      this.commit('activity/calories', obj.calories)
    }
    if (obj.distance) {
      this.commit('activity/distance', obj.distance)
    }
    if (obj.noDataImage) {
      state.noDataImage = obj.noDataImage
      this.commit('json/changed', true)
    }
    if (obj.pulse) {
      this.commit('activity/pulse', obj.pulse)
    }
    if (obj.steps) {
      this.commit('activity/steps', obj.steps)
    }
  },
  /**
   * Updates new pulse options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New pulse options.
   */
  pulse (state, obj) {
    for (const prop in obj) {
      if (prop === 'number') {
        this.commit('activity/pulseNumber', obj[prop])
      } else {
        state.pulse[prop] = obj[prop]
      }
    }
    this.commit('json/changed', true)
  },
  /**
   * Updates new pulse number options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New pulse number options.
   */
  pulseNumber (state, obj) {
    for (const prop in obj) {
      state.pulse.number[prop] = obj[prop]
    }
    this.commit('json/changed', true)
  },
  /**
   * Updates new steps options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New steps options.
   */
  steps (state, obj) {
    for (const prop in obj) {
      if (prop === 'number') {
        this.commit('activity/stepsNumber', obj[prop])
      } else {
        state.steps[prop] = obj[prop]
      }
    }
    this.commit('json/changed', true)
  },
  /**
   * Updates new steps number options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New steps number options.
   */
  stepsNumber (state, obj) {
    for (const prop in obj) {
      state.steps.number[prop] = obj[prop]
    }
    this.commit('json/changed', true)
  }
}
