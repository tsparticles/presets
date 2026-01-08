import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadHyperspacePreset(engine: Engine): void {
    engine.register(async e => {
        const { loadBasic } = await import("@tsparticles/basic"),
            { loadEmittersPlugin } = await import("@tsparticles/plugin-emitters"),
            { loadEmittersShapeSquare } = await import("@tsparticles/plugin-emitters-shape-square"),
            { loadTrailPlugin } = await import("@tsparticles/plugin-trail"),
            { loadLifeUpdater } = await import("@tsparticles/updater-life"),
            { options, presetName } = await import("./options.js");

        loadBasic(e);
        loadEmittersPlugin(e);
        loadEmittersShapeSquare(e);
        loadTrailPlugin(e);
        loadLifeUpdater(e);

        e.addPreset(presetName, options);
    });
}
