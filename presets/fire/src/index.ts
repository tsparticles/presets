import type { Engine } from "tsparticles-engine";
import { loadBasic } from "tsparticles-basic";
import { loadExternalPushInteraction } from "tsparticles-interaction-external-push";
import { options } from "./options";

/**
 *
 * @param engine -
 * @param refresh -
 */
export async function loadFirePreset(engine: Engine, refresh = true): Promise<void> {
    await loadBasic(engine, false);
    await loadExternalPushInteraction(engine, false);

    await engine.addPreset("fire", options, refresh);
}
