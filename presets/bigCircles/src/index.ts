import { type Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadBigCirclesPreset(engine: Engine): void {
    engine.register(async e => {
        const { loadBasic } = await import("@tsparticles/basic"),
            { loadEmittersPlugin } = await import("@tsparticles/plugin-emitters"),
            { loadEmittersShapeSquare } = await import("@tsparticles/plugin-emitters-shape-square"),
            { options, presetNames } = await import("./options.js");

        loadBasic(e);
        loadEmittersPlugin(e);
        loadEmittersShapeSquare(e);

        presetNames.forEach(name => {
            e.addPreset(name, options);
        });
    });
}
