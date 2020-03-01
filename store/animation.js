export const state = () => ({
  images: [],
  pause: 0,
  speed: 150,
  time: 0,
  x: 0,
  y: 0
})

export const mutations = {

  /**
   * Imports animation options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New animation options.
   */
  import (state, obj) {
    // TODO: make import function
    this.commit('json/changed', true)
  }
}
