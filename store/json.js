export const state = () => ({
  content: '{}'
})

export const getters = {
  updatedContent: (state) => {
    let imageIndex = 0
    const json = {}
    if (state.background.enabled) {
      json.background = {
        image: `${(imageIndex++).toString().padStart(4, '0')}.png`,
        x: state.background.x,
        y: state.background.y
      }
    }
    if (state.status.enabled) {
      json.status = {}
      if (state.status.alarm.enabled) {
        json.status.alarm = {
          image: `${(imageIndex++).toString().padStart(4, '0')}.png`,
          x: state.status.alarm.x,
          y: state.status.alarm.y
        }
      }
      if (state.status.bluetooth.enabled) {
        json.status.bluetooth = {
          image: `${(imageIndex++).toString().padStart(4, '0')}.png`,
          x: state.status.bluetooth.x,
          y: state.status.bluetooth.y
        }
      }
      if (state.status.dnd.enabled) {
        json.status.dnd = {
          image: `${(imageIndex++).toString().padStart(4, '0')}.png`,
          x: state.status.dnd.x,
          y: state.status.dnd.y
        }
      }
      if (state.status.lock.enabled) {
        json.status.lock = {
          image: `${(imageIndex++).toString().padStart(4, '0')}.png`,
          x: state.status.lock.x,
          y: state.status.lock.y
        }
      }
    }
    return state.content
  }
}

export const mutations = {
  changeContent (state, content) {
    try {
      const obj = JSON.parse(content)
      state.content = JSON.stringify(obj, null, 2)
    } catch (error) {}
  }
}
