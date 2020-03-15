export const state = () => ({
  static: {
    images: [],
    pause: 500,
    speed: 111,
    time: 1000,
    x: 0,
    y: 0
  }
})

export const mutations = {
  /**
   * Imports animation options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New animation options.
   */
  import (state, obj) {
    this.commit('animation/static', obj.static)
  },
  /**
   * Imports static animation options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New static animation options.
   */
  static (state, obj) {
    for (const prop in obj) {
      state.static[prop] = obj[prop]
    }
    this.commit('json/changed', true)
  }
}
