const { loadParticlesPreset } = require("@tsparticles/webpack-plugin");
const version = require("./package.json").version;

module.exports = loadParticlesPreset({
    dir: __dirname,
    moduleName: "bigCircles",
    presetName: "Big Circles",
    version: version
});
