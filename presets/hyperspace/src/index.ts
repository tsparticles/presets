import type { Engine } from "@tsparticles/engine";

/**
 *
 * @param engine -
 * @param refresh -
 */
export async function loadHyperspacePreset(engine: Engine, refresh = true): Promise<void> {
    const { loadBasic } = await import("@tsparticles/basic"),
        { loadEmittersPlugin } = await import("@tsparticles/plugin-emitters"),
        { loadEmittersShapeSquare } = await import("@tsparticles/plugin-emitters-shape-square"),
        { loadLifeUpdater } = await import("@tsparticles/updater-life"),
        { options } = await import("./options.js");

    await loadBasic(engine, false);
    await loadEmittersPlugin(engine, false);
    await loadEmittersShapeSquare(engine, false);
    await loadLifeUpdater(engine, false);

    await engine.addPreset("hyperspace", options, false);

    await engine.refresh(refresh);
}
