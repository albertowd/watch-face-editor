export const state = () => ({
  pulse: {
    enabled: true,
    height: 50,
    width: 50,
    x: 33,
    y: 392
  },
  state: {
    enabled: true,
    height: 50,
    width: 50,
    x: 149,
    y: 392
  },
  weather: {
    enabled: true,
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
    // TODO: make import function
    this.commit('json/changed', true)
  }
}
