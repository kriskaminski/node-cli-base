// Set options as a parameter, environment variable, or rc file.
// eslint-disable-next-line no-global-assign
require = require("esm")(module /*, { "esm": "js", "await": true }*/);
require("../src/cli").cli(process.argv);
