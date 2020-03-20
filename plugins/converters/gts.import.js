/**
 * Updates a device object with the available options on a device one line date object.
 * @param {object} gts A GTS object representing it's JSON to be updated.
 * @param {string} name Name of the one line option (MonthAndDay or Year).
 * @param {object} oneLine Device one line date to be updated.
 */
function _gtsDateToOneLine (gts, name, oneLine) {
  if (gts.Date && gts.Date[name] && gts.Date[name].OneLine) {
    oneLine.number.alignment = gts.Date[name].OneLine.Number.Alignment
    oneLine.number.bottom = gts.Date[name].OneLine.Number.BottomRightY
    oneLine.number.images = gts.images.slice(gts.Date[name].OneLine.Number.ImageIndex, gts.Date[name].OneLine.Number.ImageIndex + gts.Date[name].OneLine.Number.ImagesCount)
    oneLine.number.left = gts.Date[name].OneLine.Number.TopLeftX
    oneLine.number.right = gts.Date[name].OneLine.Number.BottomRightX
    oneLine.number.spacing = gts.Date[name].OneLine.Number.Spacing
    oneLine.number.top = gts.Date[name].OneLine.Number.TopLeftY

    if (gts.Date[name].OneLine.DelimiterImageIndex) {
      oneLine.delimiterImage = gts.images[gts.Date[name].OneLine.DelimiterImageIndex]
    }
  }
}
/**
 * Updates a device object with the available options on a GTS shortcut object.
 * @param {object} gts A GTS object representing it's JSON to be updated.
 * @param {string} name Name of the shortcut option (Pulse, State or Weather).
 * @param {object} shortcut Device shortcut to be updated.
 */
function _gtsToShortcut (gts, name, shortcut) {
  if (gts.Shortcuts[name]) {
    shortcut.enabled = true
    shortcut.height = gts.Shortcuts[name].Element.Height
    shortcut.width = gts.Shortcuts[name].Element.Width
    shortcut.x = gts.Shortcuts[name].Element.TopLeftX
    shortcut.y = gts.Shortcuts[name].Element.TopLeftY
  }
}

/**
 * Updates a device object with the available options on a GTS status object.
 * @param {object} gts A GTS object representing it's JSON to be updated.
 * @param {string} name Name of the status option (Alarm, Bluetooth, DoNotDisturb, Lock).
 * @param {object} status Device status to be updated.
 */
function _gtsToStatus (gts, name, status) {
  if (gts.Status[name]) {
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
 * Updates a device object with the available options on a GTS time object.
 * @param {object} gts A GTS object representing it's JSON to be updated.
 * @param {string} name Name of the time option (Hours, Minutes).
 * @param {string} sub Name of the sub time object option (Ones, Tens).
 * @param {object} time Device time to be updated.
 */
function _gtsToTime (gts, name, sub, time) {
  if (gts.Time[name] && gts.Time[name][sub]) {
    time.images = gts.images.slice(gts.Time[name][sub].ImageIndex, gts.Time[name][sub].ImageIndex + gts.Time[name][sub].ImagesCount)
    time.x = gts.Time[name][sub].X
    time.y = gts.Time[name][sub].Y
  }
}

/**
 * Imports the Animation feature to a device object.
 * @param {object} device Store based device with all available options.
 * @param {object} features Features enabled for this device.
 * @param {object} gts GTS object to be copied.
 */
function importAnimation (device, features, gts) {
  if (features.animation.motion && gts.Unknown11 && gts.Unknown11.Unknown11_1) {
    // TODO: motion animation
  }

  if (features.animation.static && gts.Unknown11 && gts.Unknown11.Unknown11_2) {
    device.animation.static.images = gts.images.slice(gts.Unknown11.Unknown11_2.Unknown11d2p1.ImageIndex, gts.Unknown11.Unknown11_2.Unknown11d2p1.ImageIndex + gts.Unknown11.Unknown11_2.Unknown11d2p1.ImagesCount)
    device.animation.static.pause = gts.Unknown11.Unknown11_2.Unknown11d2p5
    device.animation.static.speed = gts.Unknown11.Unknown11_2.Unknown11d2p2
    device.animation.static.time = gts.Unknown11.Unknown11_2.Unknown11d2p4
    device.animation.static.x = gts.Unknown11.Unknown11_2.Unknown11d2p1.X
    device.animation.static.y = gts.Unknown11.Unknown11_2.Unknown11d2p1.Y
  }
}

/**
 * Imports the Background feature to a device object.
 * @param {object} device Store based device with all available options.
 * @param {object} features Features enabled for this device.
 * @param {object} gts GTS object to be copied.
 */
function importBackground (device, features, gts) {
  if (features.background.image && gts.Background.Image) {
    device.background.image.image = gts.images[gts.Background.Image.ImageIndex]
    device.background.image.x = gts.Background.Image.X
    device.background.image.y = gts.Background.Image.Y
  }

  if (features.background.preview && gts.Background.Preview) {
    device.background.preview.image = gts.images[gts.Background.Preview.ImageIndex]
    device.background.preview.x = gts.Background.Preview.X
    device.background.preview.y = gts.Background.Preview.Y
  }
}

/**
 * Imports the Date feature to a device object.
 * @param {object} device Store based device with all available options.
 * @param {object} features Features enabled for this device.
 * @param {object} gts GTS object to be updated.
 */
function importDate (device, features, gts) {
  if (features.date.monthAndDay.oneLine) {
    _gtsDateToOneLine(gts, 'MonthAndDay', device.date.monthAndDay.oneLine)
  }

  if (features.date.year) {
    _gtsDateToOneLine(gts, 'Year', device.date.year.oneLine)
  }
}

/**
 * Imports the Shortcuts feature to a device object.
 * @param {object} device Store based device with all available options.
 * @param {object} features Features enabled for this device.
 * @param {object} gts GTS object to be copied.
 */
function importShortcuts (device, features, gts) {
  if (features.shortcuts.energy) {
    // Not supported
  }

  if (features.shortcuts.pulse) {
    _gtsToShortcut(gts, 'Pulse', device.shortcuts.pulse)
  }

  if (features.shortcuts.state) {
    _gtsToShortcut(gts, 'State', device.shortcuts.state)
  }

  if (features.shortcuts.weather) {
    _gtsToShortcut(gts, 'Weather', device.shortcuts.weather)
  }
}

/**
 * Imports the Status feature to a device object.
 * @param {object} device Store based device with all available options.
 * @param {object} features Features enabled for this device.
 * @param {object} gts GTS object to be copied.
 */
function importStatus (device, features, gts) {
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
}

/**
 * Imports the Time feature to a device object.
 * @param {object} device Store based device with all available options.
 * @param {object} features Features enabled for this device.
 * @param {object} gts GTS object to be copied.
 */
function importTime (device, features, gts) {
  if (features.time.ampm && gts.Time && gts.Time.AmPm) {
    device.time.ampm.x = gts.Time.AmPm.X
    device.time.ampm.y = gts.Time.AmPm.Y

    device.time.ampm.imagesAm = []
    if (gts.Time.AmPm.ImageIndexAMCN) {
      device.time.ampm.imagesAM.push(gts.images[gts.Time.AmPm.ImageIndexAMCN])
    }
    if (gts.Time.AmPm.ImageIndexAMEN && gts.Time.AmPm.ImageIndexAMCN !== gts.Time.AmPm.ImageIndexAMEN) {
      device.time.ampm.imagesAM.push(gts.images[gts.Time.AmPm.ImageIndexAMEN])
    }

    device.time.ampm.imagesPm = []
    if (gts.Time.AmPm.ImageIndexPMCN) {
      device.time.ampm.imagesPM.push(gts.images[gts.Time.AmPm.ImageIndexPMCN])
    }
    if (gts.Time.AmPm.ImageIndexPMEN && gts.Time.AmPm.ImageIndexPMCN !== gts.Time.AmPm.ImageIndexPMEN) {
      device.time.ampm.imagesPM.push(gts.images[gts.Time.AmPm.ImageIndexPMEN])
    }
  }

  if (features.time.delimiter && gts.Time && gts.Time.Delimiter) {
    device.time.delimiter.image = gts.images[gts.Time.Delimiter.ImageIndex]
    device.time.delimiter.x = gts.Time.Delimiter.X
    device.time.delimiter.y = gts.Time.Delimiter.Y
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
}

/**
 * Converts a GTS JSON object into a store compliant device object.
 * @param {obj} device Store based device with all available options.
 * @param {obj} features Features enabled for this device.
 * @param {obj} gts GTS JSON object to parse from.
 * @returns {obj} The updated device object.
 */
export default function (device, features, gts) {
  // TODO: activity
  importAnimation(device, features, gts)
  importBackground(device, features, gts)
  // importBattery(device, features, gts)
  // TODO: clock
  importDate(device, features, gts)
  importShortcuts(device, features, gts)
  importStatus(device, features, gts)
  // TODO: steps progress
  importTime(device, features, gts)
  // TODO: weather

  return device
}
