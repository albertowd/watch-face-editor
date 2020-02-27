export const state = () => ({
  hours: {
    ones: {
      images: [],
      x: 99,
      y: 50
    },
    tens: {
      images: [],
      x: 13,
      y: 50
    }
  },
  minutes: {
    ones: {
      images: [],
      x: 271,
      y: 50
    },
    tens: {
      images: [],
      x: 185,
      y: 50
    }
  }
})

export const mutations = {
  /**
   * Updates new hour ones options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New hour ones options.
   */
  hoursOnes (state, obj) {
    for (const prop in obj) {
      state.hours.ones[prop] = obj[prop]
    }
    this.commit('json/changed', true)
  },
  /**
   * Updates new hour tens options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New hour tens options.
   */
  hoursTens (state, obj) {
    for (const prop in obj) {
      state.hours.tens[prop] = obj[prop]
    }
    this.commit('json/changed', true)
  },
  /**
   * Imports time options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New time options.
   */
  import (state, obj) {
    this.commit('time/hoursOnes', obj.hours.ones)
    this.commit('time/hoursTens', obj.hours.tens)
    this.commit('time/minutesOnes', obj.minutes.ones)
    this.commit('time/minutesTens', obj.minutes.tens)
  },
  /**
   * Updates new minutes ones options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New minutes ones options.
   */
  minutesOnes (state, obj) {
    for (const prop in obj) {
      state.minutes.ones[prop] = obj[prop]
    }
    this.commit('json/changed', true)
  },
  /**
   * Updates new minute tens options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New minute tens options.
   */
  minutesTens (state, obj) {
    for (const prop in obj) {
      state.minutes.tens[prop] = obj[prop]
    }
    this.commit('json/changed', true)
  }
}
