/*
function _gtsToStatus (device, name, status) {
  if (status) {
    device[name] = {
      x: status.Coordinates.Y,
      y: status.Coordinates.X
    }
  }
}
*/

function _statusToGTS (gts, name, status) {
  if (status.imageOff || status.imageOn) {
    gts[name] = {
      Coordinates: {
        X: status.x,
        Y: status.y
      }
    }
    if (status.imageOff) {
      gts[name].ImageIndexOff = gts.images.length
      gts.images.push(status.imageOff)
    }
    if (status.imageOn) {
      gts[name].ImageIndexOn = gts.images.length
      gts.images.push(status.imageOn)
    }
  }
}

function fromDevice (device) {
  const gts = {
    images: []
  }

  if (device.background.allowed && device.background.image) {
    gts.Background = {
      Image: {
        ImageIndex: gts.images.length,
        X: device.background.x,
        Y: device.background.y
      },
      Preview: {
        ImageIndex: gts.images.length,
        X: device.background.x,
        Y: device.background.y
      }
    }
    gts.images.push(device.background.image)
  }

  if (device.status.alarm.allowed) {
    _statusToGTS(gts, 'Alarm', device.status.alarm)
  }
  if (device.status.bluetooth.allowed) {
    _statusToGTS(gts, 'Bluetooth', device.status.bluetooth)
  }
  if (device.status.dnd.allowed) {
    _statusToGTS(gts, 'DoNotDisturb', device.status.dnd)
  }
  if (device.status.lock.allowed) {
    _statusToGTS(gts, 'Lock', device.status.lock)
  }

  return gts
}

/*
function toDevice (gts) {
  const device = {}

  if (device.background.allowed && gts.Background.Image) {
    device.background = {
      x: gts.Background.Image.X,
      y: gts.Background.Image.Y
    }
  }

  if (device.status.alarm.allowed) {
    gtsToStatus(device, 'alarm', gts.Status.Alarm)
  }
  if (device.status.bluetooth.allowed) {
    gtsToStatus(device, 'bluetooth', gts.Status.Bluetooth)
  }
  if (device.status.dnd.allowed) {
    gtsToStatus(device, 'dnd', gts.Status.DoNotDisturb)
  }
  if (device.status.lock.allowed) {
    gtsToStatus(device, 'lock', gts.Status.Lock)
  }

  return device
}
*/

export default ({ app, store }, inject) => {
  if (!app.$converter && store.state.device.model === 'GTS') {
    inject('converter', { fromDevice })
  }
}
