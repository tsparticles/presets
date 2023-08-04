const { loadParticlesPreset } = require("@tsparticles/webpack-plugin"),
    version = require("./package.json").version;

module.exports = loadParticlesPreset({ moduleName: "squares", templateName: "Squares", version, dir: __dirname });
