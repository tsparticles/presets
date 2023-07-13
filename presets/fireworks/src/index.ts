import type { Engine } from "tsparticles-engine";
import { loadBaseMover } from "tsparticles-move-base";
import { loadCircleShape } from "tsparticles-shape-circle";
import { loadColorUpdater } from "tsparticles-updater-color";
import { loadDestroyUpdater } from "tsparticles-updater-destroy";
import { loadEmittersPlugin } from "tsparticles-plugin-emitters";
import { loadLifeUpdater } from "tsparticles-updater-life";
import { loadLineShape } from "tsparticles-shape-line";
import { loadOpacityUpdater } from "tsparticles-updater-opacity";
import { loadOutModesUpdater } from "tsparticles-updater-out-modes";
import { loadRotateUpdater } from "tsparticles-updater-rotate";
import { loadSizeUpdater } from "tsparticles-updater-size";
import { loadSoundsPlugin } from "tsparticles-plugin-sounds";
import { loadStrokeColorUpdater } from "tsparticles-updater-stroke-color";
import { options } from "./options";

/**
 *
 * @param engine -
 * @param refresh -
 */
export async function loadFireworksPreset(engine: Engine, refresh = true): Promise<void> {
    await loadBaseMover(engine, false);
    await loadEmittersPlugin(engine, false);
    await loadSoundsPlugin(engine, false);
    await loadCircleShape(engine, false);
    await loadLineShape(engine, false);
    await loadRotateUpdater(engine, false);
    await loadColorUpdater(engine, false);
    await loadDestroyUpdater(engine, false);
    await loadLifeUpdater(engine, false);
    await loadOpacityUpdater(engine, false);
    await loadOutModesUpdater(engine, false);
    await loadSizeUpdater(engine, false);
    await loadStrokeColorUpdater(engine, false);

    await engine.addPreset("fireworks", options, refresh);
}
