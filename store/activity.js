export const state = () => ({
})

export const mutations = {
  /**
   * Imports activities options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New activities options.
   */
  import (state, obj) {
    // TODO: make import function
    this.commit('json/changed', true)
  }
}
