const { loadParticlesPreset } = require("@tsparticles/webpack-plugin");
const version = require("./package.json").version;

module.exports = loadParticlesPreset({
    dir: __dirname,
    moduleName: "stars",
    presetName: "Stars",
    version: version
});
