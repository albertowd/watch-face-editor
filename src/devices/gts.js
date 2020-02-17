import defaultGTS from './defaults/gts';
import functionsGTS from './functions/gts'

const GTS = {
  defaults: defaultGTS,
  dimensions: {
    height: 442,
    width: 348
  },
  functions: functionsGTS,
  name: 'gts',
  preview: {
    dimensions: {
      height: 888,
      width: 502
    },
    offset: {
      bottom: 223,
      left: 62,
      right: 92,
      top: 223,
    },
    zoom: 0.5
  }
};

export default GTS;
