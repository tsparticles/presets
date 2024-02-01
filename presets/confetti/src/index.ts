import type { Engine } from "@tsparticles/engine";

/**
 *
 * @param engine -
 * @param refresh -
 */
async function loadPreset(engine: Engine, refresh = true): Promise<void> {
    const { loadBasic } = await import("@tsparticles/basic"),
        { loadSquareShape } = await import("@tsparticles/shape-square"),
        { loadEmittersPlugin } = await import("@tsparticles/plugin-emitters"),
        { loadMotionPlugin } = await import("@tsparticles/plugin-motion"),
        { loadWobbleUpdater } = await import("@tsparticles/updater-wobble"),
        { loadRollUpdater } = await import("@tsparticles/updater-roll"),
        { loadRotateUpdater } = await import("@tsparticles/updater-rotate"),
        { loadTiltUpdater } = await import("@tsparticles/updater-tilt"),
        { loadLifeUpdater } = await import("@tsparticles/updater-life"),
        { options } = await import("./options.js");

    await loadBasic(engine, false);
    await loadSquareShape(engine, false);
    await loadEmittersPlugin(engine, false);
    await loadMotionPlugin(engine, false);
    await loadWobbleUpdater(engine, false);
    await loadRollUpdater(engine, false);
    await loadRotateUpdater(engine, false);
    await loadTiltUpdater(engine, false);
    await loadLifeUpdater(engine, false);

    await engine.addPreset("confetti", options, false);

    await engine.refresh(refresh);
}

/**
 *
 * @param engine -
 */
export async function loadConfettiPreset(engine: Engine): Promise<void> {
    await loadPreset(engine);
}
