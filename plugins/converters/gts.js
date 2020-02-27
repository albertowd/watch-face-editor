/**
 * Updates a device status object with the available options on a GTS object.
 * @param {object} gts A GTS object representing it's JSON.
 * @param {string} name Name of the status option (Alarm, Bluetooth, DoNotDisturb, Lock).
 * @param {obj} status Device status to be updated.
 */
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

/**
 * Updates a device time object with the available options on a GTS object.
 * @param {object} gts A GTS object representing it's JSON.
 * @param {string} name Name of the time option (Hours, Minutes).
 * @param {string} sub Name of the sub time object option (Ones, Tens).
 * @param {obj} time Device time to be updated.
 */
function _gtsToTime (gts, name, sub, time) {
  time.x = gts.Time[name][sub].X
  time.y = gts.Time[name][sub].Y
  if (gts.Time[name][sub].ImagesCount) {
    time.images = gts.images.slice(gts.Time[name][sub].ImageIndex, gts.Time[name][sub].ImageIndex + gts.Time[name][sub].ImagesCount)
  }
}

/**
 * Updates a GTS object with the available options on a device status object.
 * @param {object} gts A GTS object representing it's JSON to be updated.
 * @param {string} name Name of the status option (Alarm, Bluetooth, DoNotDisturb, Lock).
 * @param {obj} status Device status to be copied.
 */
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

/**
 * Updates a GTS object with the available options on a device time object.
 * @param {object} gts A GTS object representing it's JSON to be updated.
 * @param {string} name Name of the time option (Hours, Minutes).
 * @param {string} sub Name of the sub time object option (Ones, Tens).
 * @param {obj} time Device time to be copied.
 */
function _timeToGTS (gts, name, sub, time) {
  if (time.images.length) {
    if (!gts.Time) {
      gts.Time = {}
    }

    const obj = {
      ImagesCount: time.images.length,
      ImageIndex: gts.images.length,
      X: time.x,
      Y: time.y
    }
    if (!gts.Time[name]) {
      gts.Time[name] = {}
    }
    gts.Time[name][sub] = obj
    gts.images = gts.images.concat(time.images)
  }
}

/**
 * Converts a store compliant device object into a GTS JSON object.
 * @param {obj} device Store based device with all available options.
 * @param {obj} features Features enabled for this device.
 * @returns {obj} The new GTS JSON object with enabled device options.
 */
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

  if (features.time) {
    _timeToGTS(gts, 'Hours', 'Ones', device.time.hours.ones)
    _timeToGTS(gts, 'Hours', 'Tens', device.time.hours.tens)
    _timeToGTS(gts, 'Minutes', 'Ones', device.time.minutes.ones)
    _timeToGTS(gts, 'Minutes', 'Tens', device.time.minutes.tens)
  }

  return gts
}

/**
 * Converts a GTS JSON object into a store compliant device object.
 * @param {obj} device Store based device with all available options.
 * @param {obj} features Features enabled for this device.
 * @param {obj} gts GTS JSON object to parse from.
 * @returns {obj} The updated device object.
 */
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

  if (gts.Time && features.time) {
    if (gts.Time.Hours.Ones) {
      _gtsToTime(gts, 'Hours', 'Ones', device.time.hours.ones)
    }
    if (gts.Time.Hours.Tens) {
      _gtsToTime(gts, 'Hours', 'Tens', device.time.hours.tens)
    }
    if (gts.Time.Minutes.Ones) {
      _gtsToTime(gts, 'Minutes', 'Ones', device.time.minutes.ones)
    }
    if (gts.Time.Minutes.Tens) {
      _gtsToTime(gts, 'Minutes', 'Tens', device.time.minutes.tens)
    }
  }

  return device
}

export default { fromDevice, toDevice }
