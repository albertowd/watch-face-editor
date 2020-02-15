/**
 * Converts the system device object into a GTS object..
 * @param {object} device A system device.
 * @returns {object} A GTS object.
 */
function toGTS(device) {
  const gts = {};
  console.info('[Device] Converting device to GTS...');

  if (device.background) {
    gts.Background = {};
    if (device.background.image) {
      console.debug('[Device] Found a background image.');
      gts.Background.Image = { ImageIndex: device.background.image.index, X: device.background.image.x, Y: device.background.image.y }
    }
    if (device.background.preview) {
      console.debug('[Device] Found a background preview.');
      gts.Background.Preview = { ImageIndex: device.background.preview.index, X: device.background.preview.x, Y: device.background.preview.y }
    }
  }

  if (device.date) {
    gts.Date = {};
    if (device.date.weekday) {
      console.debug('[Device] Found a week day date.');
      gts.Date.WeekDay = { ImageIndex: device.date.weekday.index, ImagesCount: device.date.weekday.count, X: device.date.weekday.x, Y: device.date.weekday.y };
    }
  }

  return gts;
}

/**
 * Converts the GTS object into a system device object..
 * @param {object} gts A GTS object.
 * @returns {object} A system device object.
 */
function toDevice(gts) {
  const device = {};
  console.info('[GTS] Converting GTS to device...');

  if (gts.Background) {
    device.background = {};
    if (gts.Background.Image) {
      console.debug('[GTS] Found a background image.');
      device.background.image = { index: gts.Background.Image.ImageIndex, x: gts.Background.Image.X, y: gts.Background.Image.Y }
    }
    if (gts.Background.Preview) {
      console.debug('[GTS] Found a background preview.');
      device.background.preview = { index: gts.Background.Preview.ImageIndex, x: gts.Background.Preview.X, y: gts.Background.Preview.Y }
    }
  }

  if (gts.Date) {
    device.date = {};
    if (gts.Date.WeekDay) {
      console.debug('[GTS] Found a week day date.');
      device.date.weekday = { count: gts.Date.WeekDay.ImagesCount, index: gts.Date.WeekDay.ImageIndex, x: gts.Date.WeekDay.X, y: gts.Date.WeekDay.Y };
    }
  }

  return device;
}

export default { toDevice: toDevice, toGTS: toGTS };
