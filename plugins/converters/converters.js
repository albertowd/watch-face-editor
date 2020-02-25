import gts from './gts'
import mb4 from './mb4'

export default ({ app, store }, inject) => {
  inject('converters', {
    gts,
    mb4
  })
}
