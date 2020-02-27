export const state = () => ({
  image: null,
  x: 0,
  y: 0
})

export const mutations = {
  /**
   * Imports background options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New background options.
   */
  import (state, obj) {
    for (const prop in obj) {
      state[prop] = obj[prop]
    }
    this.commit('json/changed', true)
  }
}
