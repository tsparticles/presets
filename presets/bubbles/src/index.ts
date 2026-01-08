import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadBubblesPreset(engine: Engine): void {
    engine.register(async e => {
        const { loadBasic } = await import("@tsparticles/basic"),
            { loadEmittersPlugin } = await import("@tsparticles/plugin-emitters"),
            { options, presetName } = await import("./options.js");

        loadBasic(e);
        loadEmittersPlugin(e);

        e.addPreset(presetName, options);
    });
}
