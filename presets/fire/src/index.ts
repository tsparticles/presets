import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadFirePreset(engine: Engine): void {
    engine.register(async e => {
        const { loadBasic } = await import("@tsparticles/basic"),
            { loadExternalPushInteraction } = await import("@tsparticles/interaction-external-push"),
            { options, presetName } = await import("./options.js");

        loadBasic(e);
        loadExternalPushInteraction(e);

        e.addPreset(presetName, options);
    });
}
