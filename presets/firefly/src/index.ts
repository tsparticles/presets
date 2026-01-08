import type { Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export function loadFireflyPreset(engine: Engine): void {
    engine.register(async e => {
        const { loadBasic } = await import("@tsparticles/basic"),
            { loadExternalTrailInteraction } = await import("@tsparticles/interaction-external-trail"),
            { options, presetName } = await import("./options.js");

        loadBasic(e);
        loadExternalTrailInteraction(e);

        e.addPreset(presetName, options);
    });
}
