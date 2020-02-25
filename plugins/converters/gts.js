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

function fromDevice (device, features) {
  const gts = {
    images: []
  }

  if (features.background && device.background.image) {
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

  if (features.date.weekDay) {
    if (device.date.weekDay.images.length) {
      gts.Date = {
        WeekDay: {
          ImageIndex: gts.images.length,
          ImagesCount: device.date.weekDay.images.length,
          X: device.date.weekDay.x,
          Y: device.date.weekDay.y
        }
      }
      gts.images = gts.images.concat(device.date.weekDay.images)
    }
  }

  if (features.status.alarm) {
    _statusToGTS(gts, 'Alarm', device.status.alarm)
  }
  if (features.status.bluetooth) {
    _statusToGTS(gts, 'Bluetooth', device.status.bluetooth)
  }
  if (features.status.dnd) {
    _statusToGTS(gts, 'DoNotDisturb', device.status.dnd)
  }
  if (features.status.lock) {
    _statusToGTS(gts, 'Lock', device.status.lock)
  }

  return gts
}

function toDevice (device, features, gts) {
  if (features.background && gts.Background) {
    device.background.image = gts.images[gts.Background.Image.ImageIndex]
    device.background.x = gts.Background.Image.X
    device.background.y = gts.Background.Image.Y
  }

  if (features.date.weekDay && gts.Date) {
    if (gts.Date.WeekDay) {
      device.date.weekDay.images = gts.images.filter((image, index) => {
        return index >= gts.Date.WeekDay.ImageIndex && index < (gts.Date.WeekDay.ImageIndex + gts.Date.WeekDay.ImagesCount)
      })
      device.date.weekDay.x = gts.Date.WeekDay.X
      device.date.weekDay.y = gts.Date.WeekDay.Y
    }
  }

  if (gts.Status) {
    if (features.status.alarm && gts.Status.Alarm) {
      _gtsToStatus(gts, 'Alarm', device.status.alarm)
    }
    if (features.status.bluetooth && gts.Status.Bluetooth) {
      _gtsToStatus(gts, 'Bluetooth', device.status.bluetooth)
    }
    if (features.status.dnd && gts.Status.DoNotDisturb) {
      _gtsToStatus(gts, 'DoNotDisturb', device.status.dnd)
    }
    if (features.status.lock && gts.Status.Lock) {
      _gtsToStatus(gts, 'Lock', device.status.lock)
    }
  }

  return device
}

export default { fromDevice, toDevice }
