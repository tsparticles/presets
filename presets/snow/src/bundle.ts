import { loadSnowPreset } from ".";
import { tsParticles } from "@tsparticles/engine";

(async (): Promise<void> => {
    await loadSnowPreset(tsParticles);
})();

export { loadSnowPreset, tsParticles };
