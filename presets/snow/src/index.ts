import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export async function loadSnowPreset(engine: Engine): Promise<void> {
    await engine.register(async e => {
        const { loadBasic } = await import("@tsparticles/basic"),
            { loadWobbleUpdater } = await import("@tsparticles/updater-wobble"),
            { options, presetName } = await import("./options.js");

        await loadBasic(e);
        await loadWobbleUpdater(e);

        e.addPreset(presetName, options);
    });
}
