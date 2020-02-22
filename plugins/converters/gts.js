function _gtsToStatus (gts, name, status) {
  status.x = gts.Status[name].Coordinates.X
  status.y = gts.Status[name].Coordinates.Y
  if (gts.Status[name].ImageIndexOff) {
    status.imageOff = gts.images[gts.Status[name].ImageIndexOff]
  }
  if (gts.Status[name].ImageIndexOn) {
    status.imageOn = gts.images[gts.Status[name].ImageIndexOn]
  }
}

function _statusToGTS (gts, name, status) {
  if (status.imageOff || status.imageOn) {
    if (!gts.Status) {
      gts.Status = {}
    }

    gts.Status[name] = {
      Coordinates: {
        X: status.x,
        Y: status.y
      }
    }
    if (status.imageOff) {
      gts.Status[name].ImageIndexOff = gts.images.length
      gts.images.push(status.imageOff)
    }
    if (status.imageOn) {
      gts.Status[name].ImageIndexOn = gts.images.length
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

function toDevice (device, gts) {
  if (gts.Background) {
    device.background.image = gts.images[gts.Background.Image.ImageIndex]
    device.background.x = gts.Background.Image.X
    device.background.y = gts.Background.Image.Y
  }

  if (gts.Status) {
    if (gts.Status.Alarm) {
      _gtsToStatus(gts, 'Alarm', device.status.alarm)
    }
    if (gts.Status.Bluetooth) {
      _gtsToStatus(gts, 'Bluetooth', device.status.bluetooth)
    }
    if (gts.Status.DoNotDisturb) {
      _gtsToStatus(gts, 'DoNotDisturb', device.status.dnd)
    }
    if (gts.Status.Lock) {
      _gtsToStatus(gts, 'Lock', device.status.lock)
    }
  }

  return device
}

export default ({ app, store }, inject) => {
  if (!app.$converter && store.state.device.model === 'GTS') {
    inject('converter', { fromDevice, toDevice })
  }
}
