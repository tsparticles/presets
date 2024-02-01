import type { Engine } from "@tsparticles/engine";

/**
 *
 * @param engine -
 * @param refresh -
 */
export async function loadFireflyPreset(engine: Engine, refresh = true): Promise<void> {
    const { loadBasic } = await import("@tsparticles/basic"),
        { loadExternalTrailInteraction } = await import("@tsparticles/interaction-external-trail"),
        { options } = await import("./options.js");

    await loadBasic(engine, false);
    await loadExternalTrailInteraction(engine, false);

    await engine.addPreset("firefly", options, false);

    await engine.refresh(refresh);
}
