import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadSnowPreset(engine: Engine): void {
    engine.register(async e => {
        const { loadBasic } = await import("@tsparticles/basic"),
            { loadWobbleUpdater } = await import("@tsparticles/updater-wobble"),
            { options, presetName } = await import("./options.js");

        loadBasic(e);
        loadWobbleUpdater(e);

        e.addPreset(presetName, options);
    });
}
