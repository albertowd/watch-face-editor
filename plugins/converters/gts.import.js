// import makeObjPath from './base-converter'

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
 * Converts a GTS JSON object into a store compliant device object.
 * @param {obj} device Store based device with all available options.
 * @param {obj} features Features enabled for this device.
 * @param {obj} gts GTS JSON object to parse from.
 * @returns {obj} The updated device object.
 */
function importGTS (device, features, gts) {
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

export default { importGTS }
