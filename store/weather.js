export const state = () => ({
  icon: {
    images: {
      images: [],
      x: 0,
      y: 0
    },
    noWeatherImage: null
  },
  temperature: {
    current: {
      alignment: 'Center',
      bottom: 245,
      images: [],
      left: 15,
      right: 115,
      spacing: 0,
      top: 205
    },
    symbols: {
      degreesImage: null,
      minusImage: null,
      noDataImage: null
    },
    today: {
      separate: {
        appendDegress: true,
        day: {
          alignment: 'Center',
          bottom: 245,
          images: [],
          left: 15,
          right: 115,
          spacing: 0,
          top: 205
        },
        night: {
          alignment: 'Center',
          bottom: 245,
          images: [],
          left: 15,
          right: 115,
          spacing: 0,
          top: 205
        }
      }
    }
  }
})

export const mutations = {
  /**
   * Imports weather options over the existing ones.
   * @param {object} state Actual state to update.
   * @param {object} obj New weather options.
   */
  import (state, obj) {
    // TODO: make import function
    this.commit('json/changed', true)
  }
}
