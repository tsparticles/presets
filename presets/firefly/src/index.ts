import { type Engine } from "@tsparticles/engine";

/**
 * @param engine -
 */
export async function loadFireflyPreset(engine: Engine): Promise<void> {
    await engine.register(async e => {
        const { loadBasic } = await import("@tsparticles/basic"),
            { loadLifeUpdater } = await import("@tsparticles/updater-life"),
            { loadExternalTrailInteraction } = await import("@tsparticles/interaction-external-trail"),
            { options, presetName } = await import("./options.js");

        await loadBasic(e);
        await loadLifeUpdater(e);
        await loadExternalTrailInteraction(e);

        e.addPreset(presetName, options);
    });
}
