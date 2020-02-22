
export const getters = {
  query: (state) => {
    return state.locale !== state.fallback ? `lang=${state.locale}` : ''
  }
}

export const mutations = {
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
