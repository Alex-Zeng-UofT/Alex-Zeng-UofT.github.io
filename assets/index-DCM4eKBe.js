function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Collider-CG0Mvbye.js","assets/index-BwbLdScd.js","assets/index-BINi7toQ.css","assets/ParticlesInteractorBase-vfDeBun3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a}from"./index-BwbLdScd.js";async function n(t,o=!0){await t.addInteractor("particlesCollisions",async i=>{const{Collider:r}=await a(()=>import("./Collider-CG0Mvbye.js"),__vite__mapDeps([0,1,2,3]));return new r(i)},o)}export{n as loadParticlesCollisionsInteraction};