export const state = () => ({
  icons: {
    coords: [
      [31, 10],
      [62, 10],
      [93, 10],
      [124, 10],
      [155, 10],
      [186, 10],
      [217, 10],
      [248, 10],
      [279, 10],
      [310, 10],
      [341, 10]
    ],
    images: []
  },
  images: {
    images: [],
    x: 248,
    y: 10
  },
  percent: {
    image: null,
    x: 303,
    y: 10
  },
  text: {
    alignment: 'Right',
    bottom: 33,
    images: [],
    left: 249,
    right: 303,
    spacing: 0,
    top: 10
  }
})

export const mutations = {
  /**
   * Imports battery icons options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New battery icons options.
   */
  icons (state, obj) {
    for (const prop in obj) {
      state.icons[prop] = obj[prop]
    }
    this.commit('json/changed', true)
  },
  /**
   * Imports battery images options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New battery images options.
   */
  images (state, obj) {
    for (const prop in obj) {
      state.images[prop] = obj[prop]
    }
    this.commit('json/changed', true)
  },
  /**
   * Imports battery options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New battery options.
   */
  import (state, obj) {
    if (obj.icons) {
      this.commit('battery/icons', obj.icons)
    }
    if (obj.images) {
      this.commit('battery/images', obj.images)
    }
    if (obj.percent) {
      this.commit('battery/percent', obj.percent)
    }
    if (obj.text) {
      this.commit('battery/text', obj.text)
    }
  },
  /**
   * Imports battery percent options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New battery percent options.
   */
  percent (state, obj) {
    for (const prop in obj) {
      state.percent[prop] = obj[prop]
    }
    this.commit('json/changed', true)
  },
  /**
   * Imports battery text options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New battery text options.
   */
  text (state, obj) {
    for (const prop in obj) {
      state.text[prop] = obj[prop]
    }
    this.commit('json/changed', true)
  }
}
