import JSZip from 'jszip'

function zipUnpacked (obj, name, callback) {
  const zName = name || 'unpacked'
  const zip = new JSZip()

  for (const index in obj.images) {
    zip.file(`${index}.png`.padStart(8, '0'), obj.images[index].replace(/^data:image\/(png|jpg);base64,/, ''), { base64: true })
  }

  delete obj.images
  zip.file(`${zName}.json`, JSON.stringify(obj, null, 2))

  zip.generateAsync({
    type: 'blob'
  }).then(function (content) {
    callback(content, `${zName}.zip`)
  })
}

export default ({ app }, inject) => {
  inject('zipUnpacked', zipUnpacked)
}
