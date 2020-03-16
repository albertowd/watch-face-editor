export const state = () => ({
  image: {
    image: null,
    x: 0,
    y: 0
  },
  preview: {
    image: null,
    x: 0,
    y: 0
  }
})

export const mutations = {
  /**
   * Imports image options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New image options.
   */
  image (state, obj) {
    for (const prop in obj) {
      state.image[prop] = obj[prop]
    }
    this.commit('json/changed', true)
  },
  /**
   * Imports background options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New background options.
   */
  import (state, obj) {
    if (obj.background) {
      this.commit('background/image', obj.background)
    }
    if (obj.preview) {
      this.commit('background/preview', obj.preview)
    }
  },
  /**
   * Imports preview options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New preview options.
   */
  preview (state, obj) {
    for (const prop in obj) {
      state.preview[prop] = obj[prop]
    }
    this.commit('json/changed', true)
  }
}
