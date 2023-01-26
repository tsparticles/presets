import { loadFirePreset } from ".";
import { tsParticles } from "@tsparticles/engine";

(async (): Promise<void> => {
    await loadFirePreset(tsParticles);
})();

export { loadFirePreset, tsParticles };
