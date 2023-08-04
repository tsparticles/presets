import type { Engine } from "tsparticles-engine";
import { loadBasic } from "tsparticles-basic";
import { loadEmittersPlugin } from "tsparticles-plugin-emitters";
import { loadLifeUpdater } from "tsparticles-updater-life";
import { loadMotionPlugin } from "tsparticles-plugin-motion";
import { loadRollUpdater } from "tsparticles-updater-roll";
import { loadRotateUpdater } from "tsparticles-updater-rotate";
import { loadSquareShape } from "tsparticles-shape-square";
import { loadTiltUpdater } from "tsparticles-updater-tilt";
import { loadWobbleUpdater } from "tsparticles-updater-wobble";
import { options } from "./options";

/**
 *
 * @param engine -
 * @param refresh -
 */
async function loadPreset(engine: Engine, refresh = true): Promise<void> {
    await loadBasic(engine, false);
    await loadSquareShape(engine, false);
    await loadEmittersPlugin(engine, false);
    await loadMotionPlugin(engine, false);
    await loadWobbleUpdater(engine, false);
    await loadRollUpdater(engine, false);
    await loadRotateUpdater(engine, false);
    await loadTiltUpdater(engine, false);
    await loadLifeUpdater(engine, false);

    await engine.addPreset("confetti", options, refresh);
}

/**
 *
 * @param engine -
 */
export async function loadConfettiPreset(engine: Engine): Promise<void> {
    await loadPreset(engine);
}
