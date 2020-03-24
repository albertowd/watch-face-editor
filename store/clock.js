export const state = () => ({
})

export const mutations = {
  /**
   * Imports clock options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New clock options.
   */
  import (state, obj) {
    // TODO: make import function
    this.commit('json/changed', true)
  }
}
