import type { Engine } from "@tsparticles/engine";

/**
 *
 * @param engine -
 * @param refresh -
 */
export async function loadFireworksPreset(engine: Engine, refresh = true): Promise<void> {
    const { loadBasic } = await import("@tsparticles/basic"),
        { loadEmittersPlugin } = await import("@tsparticles/plugin-emitters"),
        { loadEmittersShapeSquare } = await import("@tsparticles/plugin-emitters-shape-square"),
        { loadSoundsPlugin } = await import("@tsparticles/plugin-sounds"),
        { loadLineShape } = await import("@tsparticles/shape-line"),
        { loadRotateUpdater } = await import("@tsparticles/updater-rotate"),
        { loadDestroyUpdater } = await import("@tsparticles/updater-destroy"),
        { loadLifeUpdater } = await import("@tsparticles/updater-life"),
        { loadStrokeColorUpdater } = await import("@tsparticles/updater-stroke-color"),
        { options } = await import("./options.js");

    await loadBasic(engine, false);
    await loadEmittersPlugin(engine, false);
    await loadEmittersShapeSquare(engine, false);
    await loadSoundsPlugin(engine, false);
    await loadLineShape(engine, false);
    await loadRotateUpdater(engine, false);
    await loadDestroyUpdater(engine, false);
    await loadLifeUpdater(engine, false);
    await loadStrokeColorUpdater(engine, false);

    await engine.addPreset("fireworks", options, false);

    await engine.refresh(refresh);
}
