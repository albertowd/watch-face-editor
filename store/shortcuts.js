export const state = () => ({
  energy: {
    enabled: false,
    height: 77,
    width: 77,
    x: 20,
    y: 367
  },
  pulse: {
    enabled: false,
    height: 77,
    width: 77,
    x: 97,
    y: 367
  },
  state: {
    enabled: false,
    height: 77,
    width: 77,
    x: 174,
    y: 367
  },
  weather: {
    enabled: false,
    height: 77,
    width: 77,
    x: 251,
    y: 367
  }
})

export const mutations = {
  /**
   * Updates new energy options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New energy tens options.
   */
  energy (state, obj) {
    for (const prop in obj) {
      state.energy[prop] = obj[prop]
    }
    this.commit('json/changed', true)
  },
  /**
   * Imports shortcut options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New shortcut options.
   */
  import (state, obj) {
    this.commit('shortcuts/energy', obj.energy)
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
