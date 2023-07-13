const { loadParticlesPreset } = require("@tsparticles/webpack-plugin");
const version = require("./package.json").version;

module.exports = loadParticlesPreset({
    dir: __dirname,
    moduleName: "links",
    presetName: "Links",
    version: version
});
