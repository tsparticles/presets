const { loadParticlesPreset } = require("@tsparticles/webpack-plugin");
const version = require("./package.json").version;

module.exports = loadParticlesPreset({
    dir: __dirname,
    moduleName: "seaAnemone",
    presetName: "Sea Anemone",
    version: version
});
