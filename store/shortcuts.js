export const state = () => ({
  pulse: {
    enabled: false,
    height: 50,
    width: 50,
    x: 33,
    y: 392
  },
  state: {
    enabled: false,
    height: 50,
    width: 50,
    x: 149,
    y: 392
  },
  weather: {
    enabled: false,
    height: 50,
    width: 50,
    x: 265,
    y: 392
  }
})

export const mutations = {
  /**
   * Imports shortcut options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New shortcut options.
   */
  import (state, obj) {
    this.commit('shortcuts/pulse', obj.pulse)
    this.commit('shortcuts/state', obj.state)
    this.commit('shortcuts/weather', obj.weather)
  },
  /**
   * Updates new pulse options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New pulse tens options.
   */
  pulse (state, obj) {
    for (const prop in obj) {
      state.pulse[prop] = obj[prop]
    }
    this.commit('json/changed', true)
  },
  /**
   * Updates new state options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New state options.
   */
  state (state, obj) {
    for (const prop in obj) {
      state.state[prop] = obj[prop]
    }
    this.commit('json/changed', true)
  },
  /**
   * Updates new weather options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New weather options.
   */
  weather (state, obj) {
    for (const prop in obj) {
      state.weather[prop] = obj[prop]
    }
    this.commit('json/changed', true)
  }
}
