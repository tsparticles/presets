import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadConfettiPreset(engine: Engine): void {
    engine.register(async e => {
        const { loadBasic } = await import("@tsparticles/basic"),
            { loadEmittersPlugin } = await import("@tsparticles/plugin-emitters"),
            { loadMotionPlugin } = await import("@tsparticles/plugin-motion"),
            { loadRotateUpdater } = await import("@tsparticles/updater-rotate"),
            { loadSquareShape } = await import("@tsparticles/shape-square"),
            { loadTiltUpdater } = await import("@tsparticles/updater-tilt"),
            { loadWobbleUpdater } = await import("@tsparticles/updater-wobble"),
            { loadLifeUpdater } = await import("@tsparticles/updater-life"),
            { loadRollUpdater } = await import("@tsparticles/updater-roll"),
            { options, presetName } = await import("./options.js");

        loadBasic(e);
        loadSquareShape(e);
        loadEmittersPlugin(e);
        loadMotionPlugin(e);
        loadWobbleUpdater(e);
        loadRollUpdater(e);
        loadRotateUpdater(e);
        loadTiltUpdater(e);
        loadLifeUpdater(e);

        e.addPreset(presetName, options, false);
    });
}
