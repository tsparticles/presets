import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadFireworksPreset(engine: Engine): void {
    engine.register(async e => {
        const { loadBasic } = await import("@tsparticles/basic"),
            { loadEmittersPlugin } = await import("@tsparticles/plugin-emitters"),
            { loadTrailEffect } = await import("@tsparticles/effect-trail"),
            { loadEmittersShapeSquare } = await import("@tsparticles/plugin-emitters-shape-square"),
            { loadHexColorPlugin } = await import("@tsparticles/plugin-hex-color"),
            { loadHslColorPlugin } = await import("@tsparticles/plugin-hsl-color"),
            { loadRgbColorPlugin } = await import("@tsparticles/plugin-rgb-color"),
            { loadSoundsPlugin } = await import("@tsparticles/plugin-sounds"),
            { loadLineShape } = await import("@tsparticles/shape-line"),
            { loadRotateUpdater } = await import("@tsparticles/updater-rotate"),
            { loadDestroyUpdater } = await import("@tsparticles/updater-destroy"),
            { loadLifeUpdater } = await import("@tsparticles/updater-life"),
            { loadStrokeColorUpdater } = await import("@tsparticles/updater-stroke-color"),
            { initOptions, presetName } = await import("./options.js");

        loadBasic(e);
        loadHexColorPlugin(e);
        loadHslColorPlugin(e);
        loadRgbColorPlugin(e);
        loadEmittersPlugin(e);
        loadTrailEffect(e);
        loadEmittersShapeSquare(e);
        loadSoundsPlugin(e);
        loadLineShape(e);
        loadRotateUpdater(e);
        loadDestroyUpdater(e);
        loadLifeUpdater(e);
        loadStrokeColorUpdater(e);

        e.addPreset(presetName, initOptions(), false);
    });
}
