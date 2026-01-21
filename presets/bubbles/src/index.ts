import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export async function loadBubblesPreset(engine: Engine): Promise<void> {
    await engine.register(async e => {
        const { loadBasic } = await import("@tsparticles/basic"),
            { loadEmittersPlugin } = await import("@tsparticles/plugin-emitters"),
            { options, presetName } = await import("./options.js");

        await loadBasic(e);
        await loadEmittersPlugin(e);

        e.addPreset(presetName, options);
    });
}
