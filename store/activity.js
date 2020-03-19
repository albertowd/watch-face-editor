export const state = () => ({
  calories: {
    alignment: 'Center',
    bottom: 315,
    images: [],
    left: 15,
    right: 100,
    spacing: 0,
    top: 275
  },
  pulse: {
    alignment: 'Center',
    bottom: 315,
    images: [],
    left: 15,
    right: 100,
    spacing: 0,
    top: 275
  },
  steps: {
    step: {
      alignment: 'Center',
      bottom: 315,
      images: [],
      left: 15,
      right: 100,
      spacing: 0,
      top: 275
    }
  }
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
