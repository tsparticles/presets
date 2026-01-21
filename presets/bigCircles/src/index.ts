import { type Engine } from "@tsparticles/engine";

const presetNames = ["bigCircles", "big-circles"];

/**
 * @param engine -
 */
export async function loadBigCirclesPreset(engine: Engine): Promise<void> {
    await engine.register(async e => {
        const { loadBasic } = await import("@tsparticles/basic"),
            { loadEmittersPlugin } = await import("@tsparticles/plugin-emitters"),
            { loadEmittersShapeSquare } = await import("@tsparticles/plugin-emitters-shape-square"),
            { options } = await import("./options.js");

        await loadBasic(e);
        await loadEmittersPlugin(e);
        await loadEmittersShapeSquare(e);

        presetNames.forEach(name => {
            e.addPreset(name, options);
        });
    });
}
