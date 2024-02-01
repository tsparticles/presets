import { type Engine } from "@tsparticles/engine";

/**
 *
 * @param engine -
 * @param refresh -
 */
export async function loadBigCirclesPreset(engine: Engine, refresh = true): Promise<void> {
    const { loadBasic } = await import("@tsparticles/basic"),
        { loadEmittersPlugin } = await import("@tsparticles/plugin-emitters"),
        { loadEmittersShapeSquare } = await import("@tsparticles/plugin-emitters-shape-square"),
        { options } = await import("./options.js");

    await loadBasic(engine, false);
    await loadEmittersPlugin(engine, false);
    await loadEmittersShapeSquare(engine, false);

    await engine.addPreset("bigCircles", options, false);
    await engine.addPreset("big-circles", options, false);

    await engine.refresh(refresh);
}
