import type { Engine } from "@tsparticles/engine";
import { loadBasic } from "@tsparticles/basic";
import { loadDestroyUpdater } from "@tsparticles/updater-destroy";
import { loadEmittersPlugin } from "@tsparticles/plugin-emitters";
import { options } from "./options.js";

/**
 *
 * @param engine -
 * @param refresh -
 */
export async function loadFountainPreset(engine: Engine, refresh = true): Promise<void> {
    await loadBasic(engine, false);
    await loadDestroyUpdater(engine, false);
    await loadEmittersPlugin(engine, false);

    await engine.addPreset("fountain", options, false);

    await engine.refresh(refresh);
}
