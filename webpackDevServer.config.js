"use strict";

const errorOverlayMiddleware = require("react-dev-utils/errorOverlayMiddleware");
const evalSourceMapMiddleware = require("react-dev-utils/evalSourceMapMiddleware");

module.exports = {
  contentBase: "./dist",
  hot: true,
  // overlay: true,
  overlay: false,
  before(app, server) {
    // Keep `evalSourceMapMiddleware` and `errorOverlayMiddleware`
    // middlewares before `redirectServedPath` otherwise will not have any effect
    // This lets us fetch source contents from webpack for the error overlay
    app.use(evalSourceMapMiddleware(server));
    // This lets us open files from the runtime error overlay.
    app.use(errorOverlayMiddleware());

    // if (fs.existsSync(paths.proxySetup)) {
    //   // This registers user provided middleware for proxy reasons
    //   require(paths.proxySetup)(app);
    // }
  },
};
