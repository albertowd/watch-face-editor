export const mutations = {
  /**
   * Updates the current langague locale.
   * @param {object} state Actual state to update.
   * @param {object} obj New locale.
   */
  locale (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}

export const state = () => ({
  fallback: 'en',
  locale: 'en',
  locales: ['en', 'pt']
})
