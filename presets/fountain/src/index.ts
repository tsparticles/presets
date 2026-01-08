import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadFountainPreset(engine: Engine): void {
    engine.register(async e => {
        const { loadBasic } = await import("@tsparticles/basic"),
            { loadDestroyUpdater } = await import("@tsparticles/updater-destroy"),
            { loadEmittersPlugin } = await import("@tsparticles/plugin-emitters"),
            { loadTrailPlugin } = await import("@tsparticles/plugin-trail"),
            { options, presetName } = await import("./options.js");

        loadBasic(e);
        loadDestroyUpdater(e);
        loadEmittersPlugin(e);
        loadTrailPlugin(e);

        e.addPreset(presetName, options);
    });
}
