import { options, presetName } from "./options";
import type { Engine } from "tsparticles-engine";
import { loadBaseMover } from "tsparticles-move-base";
import { loadCircleShape } from "tsparticles-shape-circle";
import { loadColorUpdater } from "tsparticles-updater-color";
import { loadCurvesPath } from "tsparticles-path-curves";
import { loadEmittersPlugin } from "tsparticles-plugin-emitters";
import { loadOpacityUpdater } from "tsparticles-updater-opacity";
import { loadOutModesUpdater } from "tsparticles-updater-out-modes";
import { loadSizeUpdater } from "tsparticles-updater-size";

/**
 *
 * @param engine -
 * @param refresh -
 */
export async function loadSeaAnemonePreset(engine: Engine, refresh = true): Promise<void> {
    await loadBaseMover(engine, false);
    await loadCircleShape(engine, false);
    await loadColorUpdater(engine, false);
    await loadOpacityUpdater(engine, false);
    await loadOutModesUpdater(engine, false);
    await loadSizeUpdater(engine, false);
    await loadEmittersPlugin(engine, false);
    await loadCurvesPath(engine, false);

    await engine.addPreset(presetName, options, refresh);
}
