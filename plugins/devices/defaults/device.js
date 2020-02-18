const defaultDevice = {
  background: {
    image: {
      index: 0,
      x: 0,
      y: 0
    }
  },
  date: {
    monthanddate: {
      online: {
        delimiterindex: 27,
        number: {
          align: 'TopCenter',
          bottom: 66,
          count: 10,
          index: 17,
          left: 66,
          right: 144,
          spacing: 2,
          top: 43
        }
      },
      twodigitsday: true,
      twodigitsmonth: true
    },
    weekday: {
      count: 21,
      index: 28,
      x: 211,
      y: 43
    }
  },
  time: {
    AmPm: {
      ImageIndexAMCN: 14,
      ImageIndexPMCN: 15,
      X: 239,
      Y: 161
    },
    Delimiter: {
      ImageIndex: 16,
      X: 166,
      Y: 86
    },
    Hours: {
      Ones: {
        ImagesCount: 10,
        ImageIndex: 2,
        X: 115,
        Y: 86
      },
      Tens: {
        ImagesCount: 10,
        ImageIndex: 2,
        X: 64,
        Y: 86
      }
    },
    Minutes: {
      Ones: {
        ImagesCount: 10,
        ImageIndex: 2,
        X: 243,
        Y: 86
      },
      Tens: {
        ImagesCount: 10,
        ImageIndex: 2,
        X: 192,
        Y: 86
      }
    }
  }
}

export default defaultDevice
