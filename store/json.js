export const state = () => ({
  content: '{}'
})

export const mutations = {
  changeContent (state, content) {
    try {
      const obj = JSON.parse(content)
      state.content = JSON.stringify(obj, null, 2)
    } catch (error) {}
  }
}
