var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry: SRC_DIR + "/src",
    output: {
        path: DIST_DIR + "/src",
        filename: "bundle.js",
        publicPath: "/public/"
    },
    module: {
        loaders: [
            {
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            }
        ]
    }
};

module.exports = config;