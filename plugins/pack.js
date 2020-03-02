import JSZip from 'jszip'

/**
 * Converts all store options into a device object with values.
 * @param {VueX.Store} state A VueX store to get the options from.
 * @returns {object} A new option with store values instead of observables.
 */
function packDevice (state, preview) {
  return vuexToObj({
    activity: state.activity,
    animation: state.animation,
    background: state.background,
    battery: state.battery,
    clock: state.clock,
    date: state.date,
    shortcuts: state.shortcuts,
    status: state.status,
    preview,
    time: state.time,
    weather: state.weather
  })
}

/**
 * Commits a new uploaded device options into the store.
 * @param {object} device A device object converted from a uploaded JSON file.
 * @param {VueX.Store} store A VueX store to commit changes.
 */
function unpackDevice (device, store) {
  for (const prop in device) {
    store.commit(`${prop}/import`, device[prop])
  }
}

/**
 * Converts a VueX object into a normal object.
 * @param {object} vuex VueX Object with observables.
 * @returns {object} Same object with values instead of observables.
 */
function vuexToObj (vuex) {
  const obj = Array.isArray(vuex) ? [] : {}
  if (!Array.isArray(vuex)) {
    for (const prop in vuex) {
      const val = vuex[prop]
      obj[prop] = typeof val === 'object' && val !== null ? vuexToObj(val) : val
    }
  } else {
    for (const prop in vuex) {
      const val = vuex[prop]
      obj.push(typeof val === 'object' && val !== null ? vuexToObj(val) : val)
    }
  }
  return obj
}

/**
 * Creates a .zip file with the images and json file ready to be packed.
 * @param {object} pack Object converted from the device object with the image binaries still in it.
 * @param {string} name Optionaln ame of the zip file.
 * @param {function} callback Callback function to be executed with the zip content and file name.
 */
function zipUnpacked (pack, name, callback) {
  const zName = name || 'unpacked'
  const zip = new JSZip()

  for (const index in pack.images) {
    zip.file(`${index}.png`.padStart(8, '0'), pack.images[index].replace(/^data:image\/png;base64,/, ''), { base64: true })
  }

  delete pack.images
  zip.file(`${zName}.json`, JSON.stringify(pack, null, 4))

  zip.generateAsync({
    type: 'blob'
  }).then(function (content) {
    callback(content, `${zName}.zip`)
  })
}

export default ({ app }, inject) => {
  inject('packDevice', packDevice)
  inject('unpackDevice', unpackDevice)
  inject('vuexToObj', vuexToObj)
  inject('zipUnpacked', zipUnpacked)
}
