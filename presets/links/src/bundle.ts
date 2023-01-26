import { loadLinksPreset } from ".";
import { tsParticles } from "@tsparticles/engine";

(async (): Promise<void> => {
    await loadLinksPreset(tsParticles);
})();

export { loadLinksPreset, tsParticles };
