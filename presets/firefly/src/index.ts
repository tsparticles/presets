import type { Engine } from "@tsparticles/engine";
import { loadBasic } from "@tsparticles/basic";
import { loadExternalTrailInteraction } from "@tsparticles/interaction-external-trail";
import { options } from "./options";

/**
 *
 * @param engine -
 * @param refresh -
 */
export async function loadFireflyPreset(engine: Engine, refresh = true): Promise<void> {
    await loadBasic(engine, false);
    await loadExternalTrailInteraction(engine, false);

    await engine.addPreset("firefly", options, refresh);
}
