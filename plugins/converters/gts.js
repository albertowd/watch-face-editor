function statusToGTS (gts, index, name, status) {
  if (status.imageOff || status.imageOn) {
    gts[name] = {
      Coordinates: {
        X: status.x,
        Y: status.y
      }
    }
    if (status.imageOff) {
      gts[name].ImageIndexOff = index++
    }
    if (status.imageOn) {
      gts[name].ImageIndexOn = index++
    }
  }
  return index
}

/*
function getDevice (gts) {
  return null
}
*/

function fromDevice (device) {
  const gts = {}
  let index = 0

  console.log(device)
  if (device.background.allowed && device.background.image) {
    gts.Background = {
      Image: {
        ImageIndex: index++,
        X: device.background.x,
        Y: device.background.y
      },
      Preview: {
        ImageIndex: index - 1,
        X: device.background.x,
        Y: device.background.y
      }
    }
  }

  index = statusToGTS(gts, index, 'Alarm', device.status.alarm)
  index = statusToGTS(gts, index, 'Bluetooth', device.status.bluetooth)
  index = statusToGTS(gts, index, 'DoNotDisturb', device.status.dnd)
  index = statusToGTS(gts, index, 'Lock', device.status.lock)

  return gts
}

export default ({ app, store }, inject) => {
  if (!app.$converters && store.state.device.model === 'GTS') {
    inject('converter', { fromDevice })
  }
}
