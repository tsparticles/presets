const { loadParticlesPreset } = require("@tsparticles/webpack-plugin");
const version = require("./package.json").version;

module.exports = loadParticlesPreset({
    dir: __dirname,
    moduleName: "hyperspace",
    presetName: "Hyperspace",
    version: version
});
