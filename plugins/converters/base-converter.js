export default function (obj, path = '') {
  let aux = obj
  const paths = path.split('.')
  for (path of paths) {
    if (!aux[path]) {
      aux[path] = {}
    }
    aux = aux[path]
  }
}
