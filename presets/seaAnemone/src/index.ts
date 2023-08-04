import { options, presetName } from "./options";
import type { Engine } from "tsparticles-engine";
import { loadBasic } from "tsparticles-basic";
import { loadCurvesPath } from "tsparticles-path-curves";
import { loadEmittersPlugin } from "tsparticles-plugin-emitters";

/**
 *
 * @param engine -
 * @param refresh -
 */
export async function loadSeaAnemonePreset(engine: Engine, refresh = true): Promise<void> {
    await loadBasic(engine, false);
    await loadEmittersPlugin(engine, false);
    await loadCurvesPath(engine, false);

    await engine.addPreset(presetName, options, refresh);
}
