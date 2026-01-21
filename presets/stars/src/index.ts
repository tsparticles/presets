import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export async function loadStarsPreset(engine: Engine): Promise<void> {
    await engine.register(async e => {
        const { loadBasic } = await import("@tsparticles/basic"),
            { options, presetName } = await import("./options.js");

        await loadBasic(e);

        e.addPreset(presetName, options);
    });
}
