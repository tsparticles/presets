import type { Engine } from "@tsparticles/engine";

/**
 *
 * @param engine - the engine instance to load the preset into
 * @param refresh - should refresh the engine
 */
export async function loadSquaresPreset(engine: Engine, refresh = true): Promise<void> {
    const { loadEmittersPlugin } = await import("@tsparticles/plugin-emitters"),
        { loadSquareShape } = await import("@tsparticles/shape-square"),
        { loadRotateUpdater } = await import("@tsparticles/updater-rotate"),
        { loadSizeUpdater } = await import("@tsparticles/updater-size"),
        { loadStrokeColorUpdater } = await import("@tsparticles/updater-stroke-color"),
        { options } = await import("./options.js");

    await loadEmittersPlugin(engine, false);
    await loadSquareShape(engine, false);
    await loadRotateUpdater(engine, false);
    await loadSizeUpdater(engine, false);
    await loadStrokeColorUpdater(engine, false);

    await engine.addPreset("squares", options, false);

    await engine.refresh(refresh);
}
