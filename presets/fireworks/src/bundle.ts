import { loadFireworksPreset } from ".";
import { tsParticles } from "@tsparticles/engine";

(async (): Promise<void> => {
    await loadFireworksPreset(tsParticles);
})();

export { loadFireworksPreset, tsParticles };
