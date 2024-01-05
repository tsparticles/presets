import type { Engine } from "@tsparticles/engine";
import { loadEmittersPlugin } from "@tsparticles/plugin-emitters";
import { loadRotateUpdater } from "@tsparticles/updater-rotate";
import { loadSizeUpdater } from "@tsparticles/updater-size";
import { loadSquareShape } from "@tsparticles/shape-square";
import { loadStrokeColorUpdater } from "@tsparticles/updater-stroke-color";
import { options } from "./options.js";

/**
 *
 * @param engine - the engine instance to load the preset into
 * @param refresh - should refresh the engine
 */
export async function loadSquaresPreset(engine: Engine, refresh = true): Promise<void> {
    await loadEmittersPlugin(engine, false);
    await loadSquareShape(engine, false);
    await loadRotateUpdater(engine, false);
    await loadSizeUpdater(engine, false);
    await loadStrokeColorUpdater(engine, false);

    await engine.addPreset("squares", options, refresh);
}
