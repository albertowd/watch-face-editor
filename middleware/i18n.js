/*
 * 1. sets i18n.locale and state.locale if possible
 */
export default function ({ isHMR, app, store, route, params, error, redirect }) {
  if (isHMR) { // ignore if called from hot module replacement
    return
  }/* else if (!params.lang) {
    // if url does not have language, redirect to english
    return redirect('/en' + route.fullPath)
  }
  */

  // based on directory structure _lang/xxxx, en/about has params.lang as "en"
  const locale = params.lang || 'en'
  store.commit('SET_LANG', locale)
  app.i18n.locale = store.state.locale
}
