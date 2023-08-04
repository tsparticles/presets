import type { Engine } from "tsparticles-engine";
import { loadBasic } from "tsparticles-basic";
import { loadDestroyUpdater } from "tsparticles-updater-destroy";
import { loadEmittersPlugin } from "tsparticles-plugin-emitters";
import { loadLifeUpdater } from "tsparticles-updater-life";
import { loadLineShape } from "tsparticles-shape-line";
import { loadRotateUpdater } from "tsparticles-updater-rotate";
import { loadSoundsPlugin } from "tsparticles-plugin-sounds";
import { loadStrokeColorUpdater } from "tsparticles-updater-stroke-color";
import { options } from "./options";

/**
 *
 * @param engine -
 * @param refresh -
 */
export async function loadFireworksPreset(engine: Engine, refresh = true): Promise<void> {
    await loadBasic(engine, false);
    await loadEmittersPlugin(engine, false);
    await loadSoundsPlugin(engine, false);
    await loadLineShape(engine, false);
    await loadRotateUpdater(engine, false);
    await loadDestroyUpdater(engine, false);
    await loadLifeUpdater(engine, false);
    await loadStrokeColorUpdater(engine, false);

    await engine.addPreset("fireworks", options, refresh);
}
