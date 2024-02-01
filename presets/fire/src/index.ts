import type { Engine } from "@tsparticles/engine";

/**
 *
 * @param engine -
 * @param refresh -
 */
export async function loadFirePreset(engine: Engine, refresh = true): Promise<void> {
    const { loadBasic } = await import("@tsparticles/basic"),
        { loadExternalPushInteraction } = await import("@tsparticles/interaction-external-push"),
        { options } = await import("./options");

    await loadBasic(engine, false);
    await loadExternalPushInteraction(engine, false);

    await engine.addPreset("fire", options, false);

    await engine.refresh(refresh);
}
