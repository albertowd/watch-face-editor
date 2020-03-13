import exportGTS from './gts.export'
//  import importGTS from './gts.import'

export default ({ app, store }, inject) => {
  // Injects into the Application all available converters.
  inject('converters', {
    // gts: { export: exportGTS, import: importGTS }
    gts: { export: exportGTS }
  })
}
