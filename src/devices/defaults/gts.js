const defaultGTS = {
  Background: {
    Image: {
      ImageIndex: 0,
      X: 0,
      Y: 0
    },
    Preview: {
      ImageIndex: 1,
      X: 0,
      Y: 0
    }
  },
  Date: {
    MonthAndDay: {
      OneLine: {
        DelimiterImageIndex: 27,
        Number: {
          Alignment: 'TopCenter',
          BottomRightX: 144,
          BottomRightY: 66,
          ImageIndex: 17,
          ImagesCount: 10,
          Spacing: 2,
          TopLeftX: 66,
          TopLeftY: 43
        }
      },
      TwoDigitsDay: true,
      TwoDigitsMonth: true
    },
    WeekDay: {
      ImageIndex: 28,
      ImagesCount: 21,
      X: 211,
      Y: 43
    }
  },
  Time: {
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
        ImageIndex: 2,
        ImagesCount: 10,
        X: 115,
        Y: 86,
      },
      Tens: {
        ImageIndex: 2,
        ImagesCount: 10,
        X: 64,
        Y: 86
      }
    },
    Minutes: {
      Ones: {
        ImageIndex: 2,
        ImagesCount: 10,
        X: 243,
        Y: 86
      },
      Tens: {
        ImageIndex: 2,
        ImagesCount: 10,
        X: 192,
        Y: 86
      }
    }
  }
};

export default defaultGTS;
