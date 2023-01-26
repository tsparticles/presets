import { confetti, loadConfettiPreset } from "./index";
import type { ConfettiOptions } from "./index";
import { tsParticles } from "@tsparticles/engine";

(async (): Promise<void> => {
    await loadConfettiPreset(tsParticles);
})();

export type { ConfettiOptions };
export { confetti, loadConfettiPreset, tsParticles };
