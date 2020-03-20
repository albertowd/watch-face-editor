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
 * Imports the Shortcuts feature to a device object.
 * @param {object} device Store based device with all available options.
 * @param {object} features Features enabled for this device.
 * @param {object} gts GTS object to be copied.
 */
function importShortCuts (device, features, gts) {
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
  // importDate(device, features, gts)
  importShortCuts(device, features, gts)
  // importStatus(device, features, gts)
  // TODO: steps progress
  // importTime(device, features, gts)
  // TODO: weather

  return device
}
