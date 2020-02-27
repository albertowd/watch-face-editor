export const state = () => ({
})

export const mutations = {
  /**
   * Imports battery options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New battery options.
   */
  import (state, obj) {
    // TODO: make import function
    this.commit('json/changed', true)
  }
}
