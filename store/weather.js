export const state = () => ({
})

export const mutations = {
  weather (state, weather) {
    for (const prop in weather) {
      state[prop] = weather[prop]
    }
  }
}
