"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

var _default = (0, _styles.makeStyles)(function () {
  return {
    root: {
      maxWidth: '100%'
    },
    media: {
      height: 0,
      paddingTop: '56.25%' // 16:9

    },
    cardActions: {
      display: 'flex',
      justifyContent: 'flex-end'
    },
    cardContent: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  };
});

exports["default"] = _default;
//# sourceMappingURL=styles.dev.js.map
