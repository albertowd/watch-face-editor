import JSZip from 'jszip'

function packDevice (state) {
  return vuexToObj({
    activity: state.activity,
    animation: state.animation,
    background: state.background,
    battery: state.battery,
    clock: state.clock,
    date: state.date,
    status: state.status,
    time: state.time,
    weather: state.weather
  })
}

function unpackDevice (device, store) {
  for (const prop in device) {
    store.commit(`${prop}/${prop}`, device[prop])
  }
}

function vuexToObj (vuex) {
  const obj = {}
  for (const prop in vuex) {
    const val = vuex[prop]
    obj[prop] = typeof val === 'object' && val !== null && !Array.isArray(val) ? vuexToObj(val) : val
  }
  return obj
}

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
  inject('unpack', unpackDevice)
  inject('vuexToObj', vuexToObj)
  inject('zipUnpacked', zipUnpacked)
}
