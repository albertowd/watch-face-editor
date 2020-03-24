import html2canvas from 'html2canvas'

export default ({ app }, inject) => {
  inject('html2canvas', html2canvas)
}
