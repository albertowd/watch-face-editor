/**
 * Updates a device status object with the available options on a MB4 object.
 * @param {object} mb4 A MB4 object representing it's JSON.
 * @param {string} name Name of the status option (Alarm, Bluetooth, DoNotDisturb, Lock).
 * @param {obj} status Device status to be updated.
 */
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

/**
 * Updates a device time object with the available options on a MB4 object.
 * @param {object} mb4 A MB4 object representing it's JSON.
 * @param {string} name Name of the time option (Hours, Minutes).
 * @param {string} sub Name of the sub time object option (Ones, Tens).
 * @param {obj} time Device time to be updated.
 */
function _mb4ToTime (mb4, name, sub, time) {
  time.x = mb4.Time[name][sub].X
  time.y = mb4.Time[name][sub].Y
  if (mb4.Time[name][sub].ImagesCount) {
    time.images = mb4.images.slice(mb4.Time[name][sub].ImageIndex, mb4.Time[name][sub].ImageIndex + mb4.Time[name][sub].ImagesCount)
  }
}

/**
 * Updates a MB4 object with the available options on a device status object.
 * @param {object} mb4 A MB4 object representing it's JSON to be updated.
 * @param {string} name Name of the status option (Alarm, Bluetooth, DoNotDisturb, Lock).
 * @param {obj} status Device status to be copied.
 */
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

/**
 * Updates a MB4 object with the available options on a device time object.
 * @param {object} mb4 A MB4 object representing it's JSON to be updated.
 * @param {string} name Name of the time option (Hours, Minutes).
 * @param {string} sub Name of the sub time object option (Ones, Tens).
 * @param {obj} time Device time to be copied.
 */
function _timeToMb4 (mb4, name, sub, time) {
  if (time.images.length) {
    if (!mb4.Time) {
      mb4.Time = {}
    }

    const obj = {
      ImagesCount: time.images.length,
      ImageIndex: mb4.images.length,
      X: time.x,
      Y: time.y
    }
    if (!mb4.Time[name]) {
      mb4.Time[name] = {}
    }
    mb4.Time[name][sub] = obj
    mb4.images = mb4.images.concat(time.images)
  }
}

/**
 * Converts a store compliant device object into a MB4 JSON object.
 * @param {obj} device Store based device with all available options.
 * @param {obj} features Features enabled for this device.
 * @returns {obj} The new MB4 JSON object with enabled device options.
 */
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

  if (features.time) {
    _timeToMb4(mb4, 'Hours', 'Ones', device.time.hours.ones)
    _timeToMb4(mb4, 'Hours', 'Tens', device.time.hours.tens)
    _timeToMb4(mb4, 'Minutes', 'Ones', device.time.minutes.ones)
    _timeToMb4(mb4, 'Minutes', 'Tens', device.time.minutes.tens)
  }

  return mb4
}

/**
 * Converts a MB4 JSON object into a store compliant device object.
 * @param {obj} device Store based device with all available options.
 * @param {obj} features Features enabled for this device.
 * @param {obj} mb4 MB4 JSON object to parse from.
 * @returns {obj} The updated device object.
 */
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

  if (mb4.Time && features.time) {
    if (mb4.Time.Hours.Ones) {
      _mb4ToTime(mb4, 'Hours', 'Ones', device.time.hours.ones)
    }
    if (mb4.Time.Hours.Tens) {
      _mb4ToTime(mb4, 'Hours', 'Tens', device.time.hours.tens)
    }
    if (mb4.Time.Minutes.Ones) {
      _mb4ToTime(mb4, 'Minutes', 'Ones', device.time.minutes.ones)
    }
    if (mb4.Time.Minutes.Tens) {
      _mb4ToTime(mb4, 'Minutes', 'Tens', device.time.minutes.tens)
    }
  }

  return device
}

export default { fromDevice, toDevice }
