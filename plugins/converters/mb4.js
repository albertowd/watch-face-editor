function _mb4ToStatus (mb4, name, status) {
  status.x = mb4.Status[name].Coordinates.X
  status.y = mb4.Status[name].Coordinates.Y
  if (mb4.Status[name].ImageIndexOff) {
    status.imageOff = mb4.images[mb4.Status[name].ImageIndexOff]
  }
  if (mb4.Status[name].ImageIndexOn) {
    status.imageOn = mb4.images[mb4.Status[name].ImageIndexOn]
  }
}

function _statusTomb4 (mb4, name, status) {
  if (status.imageOff || status.imageOn) {
    if (!mb4.Status) {
      mb4.Status = {}
    }

    mb4.Status[name] = {
      Coordinates: {
        Alignment: 0,
        BoxWidth: 0,
        Order: 0,
        X: status.x,
        Y: status.y
      }
    }
    if (status.imageOff) {
      mb4.Status[name].ImageIndexOff = mb4.images.length
      mb4.images.push(status.imageOff)
    }
    if (status.imageOn) {
      mb4.Status[name].ImageIndexOn = mb4.images.length
      mb4.images.push(status.imageOn)
    }
  }
}

function fromDevice (device, features) {
  const mb4 = {
    images: []
  }

  if (features.background && device.background.image) {
    mb4.Background = {
      Image: {
        ImageIndex: mb4.images.length,
        X: device.background.x,
        Y: device.background.y
      },
      Preview: {
        ImageIndex: mb4.images.length,
        X: device.background.x,
        Y: device.background.y
      }
    }
    mb4.images.push(device.background.image)
  }

  if (features.date.weekDay) {
    if (device.date.weekDay.images.length) {
      mb4.Date = {
        WeekDay: {
          ImageIndex: mb4.images.length,
          ImagesCount: device.date.weekDay.images.length,
          X: device.date.weekDay.x,
          Y: device.date.weekDay.y
        }
      }
      mb4.images = mb4.images.concat(device.date.weekDay.images)
    }
  }

  if (features.status.alarm) {
    _statusTomb4(mb4, 'Alarm', device.status.alarm)
  }
  if (features.status.bluetooth) {
    _statusTomb4(mb4, 'Bluetooth', device.status.bluetooth)
  }
  if (features.status.dnd) {
    _statusTomb4(mb4, 'DoNotDisturb', device.status.dnd)
  }
  if (features.status.lock) {
    _statusTomb4(mb4, 'Lock', device.status.lock)
  }

  return mb4
}

function toDevice (device, features, mb4) {
  if (features.background && mb4.Background) {
    device.background.image = mb4.images[mb4.Background.Image.ImageIndex]
    device.background.x = mb4.Background.Image.X
    device.background.y = mb4.Background.Image.Y
  }

  if (features.date.weekDay) {
    if (mb4.Date.WeekDay) {
      device.date.weekDay.images = mb4.images.filter((image, index) => {
        return index >= mb4.Date.WeekDay.ImageIndex && index < (mb4.Date.WeekDay.ImageIndex + mb4.Date.WeekDay.ImagesCount)
      })
      device.date.weekDay.x = mb4.Date.WeekDay.X
      device.date.weekDay.y = mb4.Date.WeekDay.Y
    }
  }

  if (mb4.Status) {
    if (features.status.alarm && mb4.Status.Alarm) {
      _mb4ToStatus(mb4, 'Alarm', device.status.alarm)
    }
    if (features.status.bluetooth && mb4.Status.Bluetooth) {
      _mb4ToStatus(mb4, 'Bluetooth', device.status.bluetooth)
    }
    if (features.status.dnd && mb4.Status.DoNotDisturb) {
      _mb4ToStatus(mb4, 'DoNotDisturb', device.status.dnd)
    }
    if (features.status.lock && mb4.Status.Lock) {
      _mb4ToStatus(mb4, 'Lock', device.status.lock)
    }
  }

  return device
}

export default ({ app, store }, inject) => {
  console.log(store.state.device)
  if (store.state.device.alias === 'mb4') {
    inject('converter', { fromDevice, toDevice })
  }
}
