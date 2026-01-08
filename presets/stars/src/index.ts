import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadStarsPreset(engine: Engine): void {
    engine.register(async e => {
        const { loadBasic } = await import("@tsparticles/basic"),
            { options, presetName } = await import("./options.js");

        loadBasic(e);

        e.addPreset(presetName, options);
    });
}
