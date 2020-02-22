/*
 * 1. sets i18n.locale and state.locale if possible
 */
export default function ({ isHMR, app, store, route, params, error, redirect }) {
  if (isHMR) { // ignore if called from hot module replacement
    return
  }

  if (route.query.locale) {
    store.commit('i18n/locale', route.query.locale)
    app.i18n.locale = store.state.i18n.locale
  }
}
