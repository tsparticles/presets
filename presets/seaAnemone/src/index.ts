import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadSeaAnemonePreset(engine: Engine): void {
    engine.register(async e => {
        const { loadBasic } = await import("@tsparticles/basic"),
            { loadEmittersPlugin } = await import("@tsparticles/plugin-emitters"),
            { loadTrailPlugin } = await import("@tsparticles/plugin-trail"),
            { loadCurvesPath } = await import("@tsparticles/path-curves"),
            { options, presetName } = await import("./options.js");

        loadBasic(e);
        loadEmittersPlugin(e);
        loadTrailPlugin(e);
        loadCurvesPath(e);

        e.addPreset(presetName, options);
    });
}
