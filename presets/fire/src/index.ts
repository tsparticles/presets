import type { Engine } from "@tsparticles/engine";
import { loadBasic } from "@tsparticles/basic";
import { loadExternalPushInteraction } from "@tsparticles/interaction-external-push";

/**
 *
 * @param engine -
 * @param refresh -
 */
export async function loadFirePreset(engine: Engine, refresh = true): Promise<void> {
    const { options } = await import("./options.js");

    await loadBasic(engine, false);
    await loadExternalPushInteraction(engine, false);

    await engine.addPreset("fire", options, false);

    await engine.refresh(refresh);
}
