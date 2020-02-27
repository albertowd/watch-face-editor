import gts from './gts'
import mb4 from './mb4'

export default ({ app, store }, inject) => {
  // Injects into the Application all available converters.
  inject('converters', {
    gts,
    mb4
  })
}
