import makeObjPath from './base-converter'

/**
 * Updates a GTS object with the available options on a device one line date object.
 * @param {object} gts A GTS object representing it's JSON to be updated.
 * @param {string} name Name of the one line option (MonthAndDay or Year).
 * @param {object} oneLine Device one line date to be copied.
 */
function _dateOneLineToGTS (gts, name, oneLine) {
  if (oneLine.number.images.length) {
    makeObjPath(gts, `Date.${name}.OneLine`)

    const imIndex = gts.images.indexOf(oneLine.number.images[0])
    gts.Date[name].OneLine.Number = {
      Alignment: oneLine.number.alignment,
      BottomRightX: oneLine.number.right,
      BottomRightY: oneLine.number.bottom,
      ImageIndex: imIndex < 0 ? gts.images.length : imIndex,
      ImagesCount: oneLine.number.images.length,
      Spacing: oneLine.number.spacing,
      TopLeftX: oneLine.number.left,
      TopLeftY: oneLine.number.top
    }
    if (imIndex < 0) {
      gts.images = gts.images.concat(oneLine.number.images)
    }

    if (oneLine.delimiterImage) {
      const delIndex = gts.images.indexOf(oneLine.delimiterImage)

      if (delIndex < 0) {
        gts.Date[name].OneLine.DelimiterImageIndex = gts.images.length
        gts.images.push(oneLine.delimiterImage)
      } else {
        gts.Date[name].OneLine.DelimiterImageIndex = delIndex
      }
    }
  }
}

/**
 * Updates a GTS object with the available options on a device month and day date object.
 * @param {object} gts A GTS object representing it's JSON to be updated.
 * @param {string} name Name of the month and day option (Day or Month).
 * @param {object} monthAndDay Device month and day date to be copied.
 */
function _monthAndDayToGTS (gts, name, monthAndDay) {
  if (monthAndDay.images.length) {
    makeObjPath(gts, 'Date.MonthAndDay.Separate')

    const imgIndex = gts.images.indexOf(monthAndDay.images[0])
    gts.Date.MonthAndDay.Separate[name] = {
      Alignment: monthAndDay.alignment,
      BottomRightX: monthAndDay.right,
      BottomRightY: monthAndDay.bottom,
      ImageIndex: imgIndex < 0 ? gts.images.length : imgIndex,
      ImagesCount: monthAndDay.images.length,
      Spacing: monthAndDay.spacing,
      TopLeftX: monthAndDay.left,
      TopLeftY: monthAndDay.top
    }

    if (imgIndex < 0) {
      gts.images = gts.images.concat(monthAndDay.images)
    }
  }
}

/**
 * Updates a GTS object with the available options on a device shortcut object.
 * @param {object} gts A GTS object representing it's JSON to be updated.
 * @param {string} name Name of the shortcut option (Pulse, State or Weather).
 * @param {object} shortcut Device shortcut to be copied.
 */
function _shortcutToGTS (gts, name, shortcut) {
  if (shortcut.enabled) {
    makeObjPath(gts, 'ShortCuts')

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
 * @param {object} status Device status to be copied.
 */
function _statusToGTS (gts, name, status) {
  if (status.imageOff || status.imageOn) {
    makeObjPath(gts, 'Status')

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
 * @param {object} time Device time to be copied.
 */
function _timeToGTS (gts, name, sub, time) {
  if (time.images.length) {
    makeObjPath(gts, `Time.${name}`)

    const imgIndex = gts.images.indexOf(time.images[0])
    gts.Time[name][sub] = {
      ImagesCount: time.images.length,
      ImageIndex: imgIndex === -1 ? gts.images.length : imgIndex,
      X: time.x,
      Y: time.y
    }

    if (imgIndex === -1) {
      gts.images = gts.images.concat(time.images)
    }
  }
}

/**
 * Exports the Animation feature to a GTS object.
 * @param {object} device Store based device with all available options.
 * @param {object} features Features enabled for this device.
 * @param {object} gts GTS object to be updated.
 */
function exportAnimation (device, features, gts) {
  if (features.animation.motion) {
    makeObjPath(gts, 'Unknown11.Unknown11_1')
    // TODO: motion animation
  }

  if (features.animation.static && device.animation.static.images.length) {
    makeObjPath(gts, 'Unknown11.Unknown11_2')
    gts.Unknown11.Unknown11_2 = {
      Unknown11d2p1: {
        ImageIndex: gts.images.length,
        ImagesCount: device.animation.static.images.length,
        X: device.animation.static.x,
        Y: device.animation.static.y
      },
      Unknown11d2p2: device.animation.static.speed,
      Unknown11d2p3: 0,
      Unknown11d2p4: device.animation.static.time,
      Unknown11d2p5: device.animation.static.pause
    }
    gts.images = gts.images.concat(device.animation.static.images)
  }
}

/**
 * Exports the Background feature to a GTS object.
 * @param {object} device Store based device with all available options.
 * @param {object} features Features enabled for this device.
 * @param {object} gts GTS object to be updated.
 */
function exportBackground (device, features, gts) {
  if (features.background.image && device.background.image.image) {
    makeObjPath(gts, 'Background.Image')
    gts.Background.Image = {
      ImageIndex: gts.images.length,
      X: device.background.image.x,
      Y: device.background.image.y
    }
    gts.images.push(device.background.image.image)
  }

  if (features.background.preview && device.background.preview.image) {
    makeObjPath(gts, 'Background.Preview')
    gts.Background.Preview = {
      ImageIndex: gts.images.length,
      X: device.background.preview.x,
      Y: device.background.preview.y
    }
    gts.images.push(device.background.preview.image)
  }
}

/**
 * Exports the Battery feature to a GTS object.
 * @param {object} device Store based device with all available options.
 * @param {object} features Features enabled for this device.
 * @param {object} gts GTS object to be updated.
 */
function exportBattery (device, features, gts) {
  if (features.battery.percent && device.battery.percent.images) {
    makeObjPath(gts, 'Battery.Percent')

    const imgIndex = gts.images.indexOf(device.battery.percent.image)
    gts.Battery.Percent = {
      ImageIndex: imgIndex < 0 ? gts.images.length : imgIndex,
      X: device.background.preview.x,
      Y: device.background.preview.y
    }

    if (imgIndex < 0) {
      gts.images = gts.images.concat(device.battery.percent.image)
    }
  }

  if (features.battery.text && device.battery.text.images.length) {
    makeObjPath(gts, 'Battery.Text')

    const imgIndex = gts.images.indexOf(device.battery.text.images[0])
    gts.BAttery.Text = {
      Alignment: device.battery.text.alignment,
      BottomRightX: device.battery.text.right,
      BottomRightY: device.battery.text.bottom,
      ImageIndex: imgIndex < 0 ? gts.images.length : imgIndex,
      ImagesCount: device.battery.text.images.length,
      Spacing: device.battery.text.spacing,
      TopLeftX: device.battery.text.left,
      TopLeftY: device.battery.text.top
    }

    if (imgIndex < 0) {
      gts.images = gts.images.concat(device.battery.text.images)
    }
  }
}

/**
 * Exports the Date feature to a GTS object.
 * @param {object} device Store based device with all available options.
 * @param {object} features Features enabled for this device.
 * @param {object} gts GTS object to be updated.
 */
function exportDate (device, features, gts) {
  if (features.date.monthAndDay.oneLine) {
    _dateOneLineToGTS(gts, 'MonthAndDay', device.date.monthAndDay.oneLine)
  }

  if (features.date.monthAndDay.separate.day) {
    _monthAndDayToGTS(gts, 'Day', device.date.monthAndDay.separate.day)
  }

  if (features.date.monthAndDay.separate.month) {
    _monthAndDayToGTS(gts, 'Month', device.date.monthAndDay.separate.month)
  }

  if (features.date.monthAndDay.separate.monthName && device.date.monthAndDay.separate.monthName.images.length) {
    makeObjPath(gts, 'Date.MonthAndDay.Separate.MonthName')

    gts.Date.MonthAndDay.Separate.MonthName = {
      ImageIndex: gts.images.length,
      ImagesCount: device.date.monthAndDay.separate.monthName.images.length,
      X: device.date.monthAndDay.separate.monthName.x,
      Y: device.date.monthAndDay.separate.monthName.y
    }
    gts.images = gts.images.concat(device.date.monthAndDay.separate.monthName.images)
  }

  if (gts.Date && gts.Date.MonthAndDay) {
    gts.Date.MonthAndDay.twoDigitsDay = device.date.monthAndDay.twoDigitsDay
    gts.Date.MonthAndDay.twoDigitsMonth = device.date.monthAndDay.twoDigitsMonth
  }

  if (features.date.weekDay && device.date.weekDay.images.length) {
    makeObjPath(gts, 'Date.WeekDay')
    gts.Date.WeekDay = {
      ImageIndex: gts.images.length,
      ImagesCount: device.date.weekDay.images.length,
      X: device.date.weekDay.x,
      Y: device.date.weekDay.y
    }
    gts.images = gts.images.concat(device.date.weekDay.images)
  }

  if (features.date.weekDayProgress && device.date.weekDayProgress.images.length) {
    makeObjPath(gts, 'Date.WeekDayProgress')

    const imgIndex = gts.images.indexOf(device.date.weekDayProgress.images[0])
    gts.Date.WeekDayProgress = {
      Coordinates: device.date.weekDayProgress.coords.map((coord) => { return { X: coord[0], Y: coord[1] } }),
      ImageIndex: imgIndex < 0 ? gts.images.length : imgIndex
    }

    if (imgIndex < 0) {
      gts.images = gts.images.concat(device.date.weekDayProgress.images)
    }
  }

  if (features.date.year) {
    _dateOneLineToGTS(gts, 'Year', device.date.year.oneLine)
  }
}

/**
 * Exports the ShortCuts feature to a GTS object.
 * @param {object} device Store based device with all available options.
 * @param {object} features Features enabled for this device.
 * @param {object} gts GTS object to be updated.
 */
function exportShortCuts (device, features, gts) {
  if (features.shortcuts.energy) {
    // Not supported
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
}

/**
 * Exports the Status feature to a GTS object.
 * @param {object} device Store based device with all available options.
 * @param {object} features Features enabled for this device.
 * @param {object} gts GTS object to be updated.
 */
function exportStatus (device, features, gts) {
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
}

/**
 * Exports the Time feature to a GTS object.
 * @param {object} device Store based device with all available options.
 * @param {object} features Features enabled for this device.
 * @param {object} gts GTS object to be updated.
 */
function exportTime (device, features, gts) {
  if (features.time.ampm && (device.time.ampm.imagesAM.length || device.time.ampm.imagesPM.length)) {
    makeObjPath(gts, 'Time.AmPm')
    gts.Time.AmPm = {
      X: device.time.ampm.x,
      Y: device.time.ampm.y
    }

    if (device.time.ampm.imagesAM.length) {
      gts.Time.AmPm.ImageIndexAMCN = gts.images.length
      gts.Time.AmPm.ImageIndexAMEN = gts.images.length + (device.time.ampm.imagesAM.length > 1 ? 1 : 0)
      gts.images = gts.images.concat(device.time.ampm.imagesAM)
    }

    if (device.time.ampm.imagesPM.length) {
      gts.Time.AmPm.ImageIndexPMCN = gts.images.length
      gts.Time.AmPm.ImageIndexPMEN = gts.images.length + (device.time.ampm.imagesPM.length > 1 ? 1 : 0)
      gts.images = gts.images.concat(device.time.ampm.imagesPM)
    }
  }

  if (features.time.delimiter && device.time.delimiter.image) {
    makeObjPath(gts, 'Time.Delimiter')
    gts.Time.Delimiter = {
      ImageIndex: gts.images.length,
      X: device.time.delimiter.x,
      Y: device.time.delimiter.y
    }
    gts.images.push(device.time.delimiter.image)
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
}

/**
 * Converts a store compliant device object into a GTS JSON object.
 * @param {object} device Store based device with all available options.
 * @param {object} features Features enabled for this device.
 * @returns {object} The new GTS JSON object with enabled device options.
 */
export default function (device, features) {
  const gts = {
    images: []
  }

  exportAnimation(device, features, gts)
  exportBackground(device, features, gts)
  exportBattery(device, features, gts)
  exportDate(device, features, gts)
  exportShortCuts(device, features, gts)
  exportStatus(device, features, gts)
  exportTime(device, features, gts)

  return gts
}
