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
    makeObjPath(gts, 'Shortcuts')

    gts.Shortcuts[name] = {
      Element: {
        Height: shortcut.height,
        TopLeftX: shortcut.x,
        TopLeftY: shortcut.y,
        Width: shortcut.width
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
 * Exports the Activity feature to a GTS object.
 * @param {object} device Store based device with all available options.
 * @param {object} features Features enabled for this device.
 * @param {object} gts GTS object to be updated.
 */
function exportActivity (device, features, gts) {
  if (features.activity.calories.number && device.activity.calories.number.images.length) {
    makeObjPath(gts, 'Activity.Calories')

    const imIndex = gts.images.indexOf(device.activity.calories.number.images[0])
    gts.Activity.Calories = {
      Alignment: device.activity.calories.number.alignment,
      BottomRightX: device.activity.calories.number.right,
      BottomRightY: device.activity.calories.number.bottom,
      ImageIndex: imIndex < 0 ? gts.images.length : imIndex,
      ImagesCount: device.activity.calories.number.images.length,
      Spacing: device.activity.calories.number.spacing,
      TopLeftX: device.activity.calories.number.left,
      TopLeftY: device.activity.calories.number.top
    }
    if (imIndex < 0) {
      gts.images = gts.images.concat(device.activity.calories.number.images)
    }
  }

  if (features.activity.calories.number && device.activity.distance.number.images.length) {
    makeObjPath(gts, 'Activity.Distance.Number')

    const imIndex = gts.images.indexOf(device.activity.distance.number.images[0])
    gts.Activity.Distance.Number = {
      Alignment: device.activity.distance.number.alignment,
      BottomRightX: device.activity.distance.number.right,
      BottomRightY: device.activity.distance.number.bottom,
      ImageIndex: imIndex < 0 ? gts.images.length : imIndex,
      ImagesCount: device.activity.distance.number.images.length,
      Spacing: device.activity.distance.number.spacing,
      TopLeftX: device.activity.distance.number.left,
      TopLeftY: device.activity.distance.number.top
    }

    if (imIndex < 0) {
      gts.images = gts.images.concat(device.activity.distance.number.images)
    }

    if (device.activity.distance.decimalImage) {
      const decimalIndex = gts.images.indexOf(device.activity.distance.decimalImage)
      gts.Activity.Distance.DecimalPointImageIndex = gts.images.length
      if (decimalIndex < 0) {
        gts.images.push(device.activity.distance.decimalImage)
      }
    }

    if (device.activity.distance.kmImage) {
      const kmIndex = gts.images.indexOf(device.activity.distance.kmImage)
      gts.Activity.Distance.SuffixImageIndex = gts.images.length
      if (kmIndex < 0) {
        gts.images.push(device.activity.distance.kmImage)
      }
    }
  }

  if (features.activity.noDataImage && device.activity.noDataImage) {
    makeObjPath(gts, 'Activity')
    const noDataIndex = gts.images.indexOf(device.activity.noDataImage)
    gts.Activity.NoDataImageIndex = noDataIndex < 0 ? gts.images.length : noDataIndex
    if (noDataIndex < 0) {
      gts.images.push(device.activity.noDataImage)
    }
  }

  if (features.activity.calories.number && device.activity.pulse.number.images.length) {
    makeObjPath(gts, 'Activity.Pulse')

    const imIndex = gts.images.indexOf(device.activity.pulse.number.images[0])
    gts.Activity.Pulse = {
      Alignment: device.activity.pulse.number.alignment,
      BottomRightX: device.activity.pulse.number.right,
      BottomRightY: device.activity.pulse.number.bottom,
      ImageIndex: imIndex < 0 ? gts.images.length : imIndex,
      ImagesCount: device.activity.pulse.number.images.length,
      Spacing: device.activity.pulse.number.spacing,
      TopLeftX: device.activity.pulse.number.left,
      TopLeftY: device.activity.pulse.number.top
    }
    if (imIndex < 0) {
      gts.images = gts.images.concat(device.activity.pulse.number.images)
    }
  }

  if (features.activity.calories.number && device.activity.steps.number.images.length) {
    makeObjPath(gts, 'Activity.Steps.Step')

    const imIndex = gts.images.indexOf(device.activity.steps.number.images[0])
    gts.Activity.Steps.Step = {
      Alignment: device.activity.steps.number.alignment,
      BottomRightX: device.activity.steps.number.right,
      BottomRightY: device.activity.steps.number.bottom,
      ImageIndex: imIndex < 0 ? gts.images.length : imIndex,
      ImagesCount: device.activity.steps.number.images.length,
      Spacing: device.activity.steps.number.spacing,
      TopLeftX: device.activity.steps.number.left,
      TopLeftY: device.activity.steps.number.top
    }

    if (imIndex < 0) {
      gts.images = gts.images.concat(device.activity.steps.number.images)
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
  if (features.animation.motion && device.animation.motion) {
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
  if (features.battery.icons && device.battery.icons.images.length) {
    makeObjPath(gts, 'Battery.Icons')

    const imgIndex = gts.images.indexOf(device.battery.icons.images[0])
    gts.Battery.Icons = {
      Coordinates: device.battery.icons.coords.map((coord) => { return { X: coord[0], Y: coord[1] } }),
      ImageIndex: imgIndex < 0 ? gts.images.length : imgIndex
    }

    if (imgIndex < 0) {
      gts.images = gts.images.concat(device.battery.icons.images)
    }
  }

  if (features.battery.images && device.battery.images.images.length) {
    makeObjPath(gts, 'Battery.Images')

    const imgIndex = gts.images.indexOf(device.battery.images.images[0])
    gts.Battery.Images = {
      ImageIndex: imgIndex < 0 ? gts.images.length : imgIndex,
      ImagesCount: device.battery.images.images.length,
      X: device.battery.images.x,
      Y: device.battery.images.y
    }

    if (imgIndex < 0) {
      gts.images = gts.images.concat(device.battery.images.images)
    }
  }

  if (features.battery.percent && device.battery.percent.image) {
    makeObjPath(gts, 'Battery.Percent')

    const imgIndex = gts.images.indexOf(device.battery.percent.image)
    gts.Battery.Percent = {
      ImageIndex: imgIndex < 0 ? gts.images.length : imgIndex,
      X: device.battery.percent.x,
      Y: device.battery.percent.y
    }

    if (imgIndex < 0) {
      gts.images.push(device.battery.percent.image)
    }
  }

  if (features.battery.text && device.battery.text.images.length) {
    makeObjPath(gts, 'Battery.Text')

    const imgIndex = gts.images.indexOf(device.battery.text.images[0])
    gts.Battery.Text = {
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

  if (features.date.monthAndDay.separate.monthName && device.date.monthAndDay.separate.monthName.images.length) {
    if (device.date.monthAndDay.oneLine.number.images.length) {
      alert('One line date overwrites month name, it will not be shown on watch.')
    }
    makeObjPath(gts, 'Date.MonthAndDay.Separate.MonthName')

    gts.Date.MonthAndDay.Separate.MonthName = {
      ImageIndex: gts.images.length,
      ImagesCount: device.date.monthAndDay.separate.monthName.images.length,
      X: device.date.monthAndDay.separate.monthName.x,
      Y: device.date.monthAndDay.separate.monthName.y
    }
    gts.images = gts.images.concat(device.date.monthAndDay.separate.monthName.images)
  }

  if (features.date.monthAndDay.separate.day) {
    if (device.date.monthAndDay.oneLine.number.images.length) {
      alert('One line date overwrites separate day, it will not be shown on watch.')
    }
    _monthAndDayToGTS(gts, 'Day', device.date.monthAndDay.separate.day)
  }

  if (features.date.monthAndDay.separate.month) {
    if (device.date.monthAndDay.oneLine.number.images.length) {
      alert('One line date overwrites separate month, it will not be shown on watch.')
    } else if (device.date.monthAndDay.separate.monthName.images.length) {
      alert('Month name overwrites separate month, it will not be shown on watch.')
    }
    _monthAndDayToGTS(gts, 'Month', device.date.monthAndDay.separate.month)
  }

  if (gts.Date && gts.Date.MonthAndDay) {
    gts.Date.MonthAndDay.TwoDigitsDay = device.date.monthAndDay.twoDigitsDay
    gts.Date.MonthAndDay.TwoDigitsMonth = device.date.monthAndDay.twoDigitsMonth
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

  exportActivity(device, features, gts)
  exportAnimation(device, features, gts)
  exportBackground(device, features, gts)
  exportBattery(device, features, gts)
  // TODO: clock
  exportDate(device, features, gts)
  exportShortCuts(device, features, gts)
  exportStatus(device, features, gts)
  // TODO: steps progress
  exportTime(device, features, gts)
  // TODO: weather

  return gts
}
