import type { Engine } from "tsparticles-engine";
import { loadBasic } from "tsparticles-basic";
import { loadWobbleUpdater } from "tsparticles-updater-wobble";
import { options } from "./options";

/**
 *
 * @param engine -
 * @param refresh -
 */
export async function loadSnowPreset(engine: Engine, refresh = true): Promise<void> {
    await loadBasic(engine, false);
    await loadWobbleUpdater(engine, false);

    await engine.addPreset("snow", options, refresh);
}
