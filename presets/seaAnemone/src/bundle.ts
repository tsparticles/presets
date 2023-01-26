import { loadSeaAnemonePreset } from ".";
import { tsParticles } from "@tsparticles/engine";

(async (): Promise<void> => {
    await loadSeaAnemonePreset(tsParticles);
})();

export { loadSeaAnemonePreset, tsParticles };
