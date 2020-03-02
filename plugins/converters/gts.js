/**
 * Updates a device shortcut object with the available options on a GTS object.
 * @param {object} gts A GTS object representing it's JSON.
 * @param {string} name Name of the shortcut option (Pulse, State or Weather).
 * @param {obj} shortcut Device shortcut to be updated.
 */
function _gtsToShortcuts (gts, name, shortcut) {
  if (gts.ShortCuts && gts.ShortCuts[name] && gts.ShortCuts[name].Element) {
    shortcut.enabled = true
    shortcut.height = gts.ShortCuts[name].Element.Height
    shortcut.width = gts.ShortCuts[name].Element.Width
    shortcut.x = gts.ShortCuts[name].Element.TopLeftX
    shortcut.y = gts.ShortCuts[name].Element.TopLeftY
  }
}

/**
 * Updates a device status object with the available options on a GTS object.
 * @param {object} gts A GTS object representing it's JSON.
 * @param {string} name Name of the status option (Alarm, Bluetooth, DoNotDisturb, Lock).
 * @param {obj} status Device status to be updated.
 */
function _gtsToStatus (gts, name, status) {
  if (gts.Status && gts.Status[name]) {
    status.x = gts.Status[name].Coordinates.X
    status.y = gts.Status[name].Coordinates.Y
    if (gts.Status[name].ImageIndexOff) {
      status.imageOff = gts.images[gts.Status[name].ImageIndexOff]
    }
    if (gts.Status[name].ImageIndexOn) {
      status.imageOn = gts.images[gts.Status[name].ImageIndexOn]
    }
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
  if (gts.Time && gts.Time[name] && gts.Time[name][sub]) {
    time.x = gts.Time[name][sub].X
    time.y = gts.Time[name][sub].Y
    if (gts.Time[name][sub].ImagesCount) {
      time.images = gts.images.slice(gts.Time[name][sub].ImageIndex, gts.Time[name][sub].ImageIndex + gts.Time[name][sub].ImagesCount)
    }
  }
}

/**
 * Updates a GTS object with the available options on a device shortcut object.
 * @param {object} gts A GTS object representing it's JSON to be updated.
 * @param {string} name Name of the shortcut option (Pulse, State or Weather).
 * @param {obj} shortcut Device shortcut to be copied.
 */
function _shortcutToGTS (gts, name, shortcut) {
  if (shortcut.enabled) {
    if (!gts.ShortCuts) {
      gts.ShortCuts = {}
    }

    gts.ShortCuts[name] = {
      Element: {
        Height: shortcut.height,
        Width: shortcut.width,
        TopLeftX: shortcut.x,
        TopLeftY: shortcut.y
      }
    }
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

    const imgIndex = gts.images.indexOf(time.images[0])

    const obj = {
      ImagesCount: time.images.length,
      ImageIndex: imgIndex !== -1 ? imgIndex : gts.images.length,
      X: time.x,
      Y: time.y
    }
    if (!gts.Time[name]) {
      gts.Time[name] = {}
    }
    gts.Time[name][sub] = obj

    if (imgIndex === -1) {
      gts.images = gts.images.concat(time.images)
    }
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

  if (features.background) {
    if (device.background.image) {
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
    if (device.preview) {
      if (!gts.Background) {
        gts.Background = {}
      }

      gts.Background.Preview = {
        ImageIndex: gts.images.length,
        X: 0,
        Y: 0
      }
      gts.images.push(device.preview)
    }
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

  if (features.shortcuts.pulse) {
    _shortcutToGTS(gts, 'Pulse', device.shortcuts.pulse)
  }
  if (features.shortcuts.state) {
    _shortcutToGTS(gts, 'State', device.shortcuts.state)
  }
  if (features.shortcuts.weather) {
    _shortcutToGTS(gts, 'Weather', device.shortcuts.weather)
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

  if (features.time.ampm) {
    if (device.time.ampm.imagesAM.length || device.time.ampm.imagesPM.length) {
      if (!gts.Time) {
        gts.Time = {}
      }

      gts.Time.AmPm = {
        X: device.time.ampm.x,
        Y: device.time.ampm.y
      }

      if (device.time.ampm.imagesAM.length) {
        gts.Time.AmPm.ImageIndexAMCN = gts.images.length
        gts.Time.AmPm.ImageIndexAMEN = device.time.ampm.imagesAM.length === 2 ? gts.images.length + 1 : 0
        gts.images = gts.images.concat(device.time.ampm.imagesAM)
      }

      if (device.time.ampm.imagesPM.length) {
        gts.Time.AmPm.ImageIndexPMCN = gts.images.length
        gts.Time.AmPm.ImageIndexPMEN = device.time.ampm.imagesPM.length === 2 ? gts.images.length + 1 : 0
        gts.images = gts.images.concat(device.time.ampm.imagesPM)
      }
    }
  }
  if (features.time.delimiter) {
    if (device.time.delimiter.image) {
      if (!gts.Time) {
        gts.Time = {}
      }

      gts.Time.Delimiter = {
        ImageIndex: gts.images.length,
        X: device.time.delimiter.x,
        Y: device.time.delimiter.y
      }
      gts.images.push(device.time.delimiter.image)
    }
  }
  if (features.time.hours) {
    _timeToGTS(gts, 'Hours', 'Ones', device.time.hours.ones)
    _timeToGTS(gts, 'Hours', 'Tens', device.time.hours.tens)
  }
  if (features.time.minutes) {
    _timeToGTS(gts, 'Minutes', 'Ones', device.time.minutes.ones)
    _timeToGTS(gts, 'Minutes', 'Tens', device.time.minutes.tens)
  }
  if (features.time.seconds) {
    _timeToGTS(gts, 'Seconds', 'Ones', device.time.seconds.ones)
    _timeToGTS(gts, 'Seconds', 'Tens', device.time.seconds.tens)
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
  if (features.background) {
    if (gts.Background) {
      device.background.image = gts.images[gts.Background.Image.ImageIndex]
      device.background.x = gts.Background.Image.X
      device.background.y = gts.Background.Image.Y
    }
  }

  if (features.date.weekDay) {
    if (gts.Date && gts.Date.WeekDay) {
      device.date.weekDay.images = gts.images.filter((image, index) => {
        return index >= gts.Date.WeekDay.ImageIndex && index < (gts.Date.WeekDay.ImageIndex + gts.Date.WeekDay.ImagesCount)
      })
      device.date.weekDay.x = gts.Date.WeekDay.X
      device.date.weekDay.y = gts.Date.WeekDay.Y
    }
  }

  if (features.shortcuts.pulse) {
    _gtsToShortcuts(gts, 'Pulse', device.shortcuts.pulse)
  }
  if (features.shortcuts.state) {
    _gtsToShortcuts(gts, 'State', device.shortcuts.state)
  }
  if (features.shortcuts.weather) {
    _gtsToShortcuts(gts, 'Weather', device.shortcuts.weather)
  }

  if (features.status.alarm) {
    _gtsToStatus(gts, 'Alarm', device.status.alarm)
  }
  if (features.status.bluetooth) {
    _gtsToStatus(gts, 'Bluetooth', device.status.bluetooth)
  }
  if (features.status.dnd) {
    _gtsToStatus(gts, 'DoNotDisturb', device.status.dnd)
  }
  if (features.status.lock) {
    _gtsToStatus(gts, 'Lock', device.status.lock)
  }

  if (features.time.ampm) {
    if (gts.Time && gts.Time.AmPm) {
      const imagesAM = (gts.Time.AmPm.ImageIndexAMCN ? [gts.images[gts.Time.AmPm.ImageIndexAMCN]] : []).concat(gts.Time.AmPm.ImageIndexAMEN ? [gts.images[gts.Time.AmPm.ImageIndexAMEN]] : [])
      const imagesPM = (gts.Time.AmPm.ImageIndexPMCN ? [gts.images[gts.Time.AmPm.ImageIndexPMCN]] : []).concat(gts.Time.AmPm.ImageIndexPMEN ? [gts.images[gts.Time.AmPm.ImageIndexPMEN]] : [])
      device.time.ampm = {
        imagesAM,
        imagesPM,
        x: gts.Time.AmPm.X,
        y: gts.Time.AmPm.Y
      }
    }
  }
  if (features.time.delimiter) {
    if (gts.Time && gts.Time.Delimiter) {
      device.time.delimiter = {
        image: gts.images[gts.Time.Delimiter.ImageIndex],
        x: gts.Time.Delimiter.X,
        y: gts.Time.Delimiter.Y
      }
    }
  }
  if (features.time.hours) {
    _gtsToTime(gts, 'Hours', 'Ones', device.time.hours.ones)
    _gtsToTime(gts, 'Hours', 'Tens', device.time.hours.tens)
  }
  if (features.time.minutes) {
    _gtsToTime(gts, 'Minutes', 'Ones', device.time.minutes.ones)
    _gtsToTime(gts, 'Minutes', 'Tens', device.time.minutes.tens)
  }
  if (features.time.seconds) {
    _gtsToTime(gts, 'Seconds', 'Ones', device.time.seconds.ones)
    _gtsToTime(gts, 'Seconds', 'Tens', device.time.seconds.tens)
  }

  return device
}

export default { fromDevice, toDevice }
