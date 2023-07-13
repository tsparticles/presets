import type { Engine } from "tsparticles-engine";
import { loadBaseMover } from "tsparticles-move-base";
import { loadCircleShape } from "tsparticles-shape-circle";
import { loadColorUpdater } from "tsparticles-updater-color";
import { loadOpacityUpdater } from "tsparticles-updater-opacity";
import { loadOutModesUpdater } from "tsparticles-updater-out-modes";
import { loadSizeUpdater } from "tsparticles-updater-size";
import { loadWobbleUpdater } from "tsparticles-updater-wobble";
import { options } from "./options";

/**
 *
 * @param engine -
 * @param refresh -
 */
export async function loadSnowPreset(engine: Engine, refresh = true): Promise<void> {
    await loadBaseMover(engine, false);
    await loadCircleShape(engine, false);
    await loadColorUpdater(engine, false);
    await loadOpacityUpdater(engine, false);
    await loadOutModesUpdater(engine, false);
    await loadSizeUpdater(engine, false);
    await loadWobbleUpdater(engine, false);

    await engine.addPreset("snow", options, refresh);
}
