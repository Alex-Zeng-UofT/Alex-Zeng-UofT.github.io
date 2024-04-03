function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Collider-BgATma-4.js","assets/index-DIW2vxnt.js","assets/index-bZJ4Mhtb.css","assets/ParticlesInteractorBase-vfDeBun3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a}from"./index-DIW2vxnt.js";async function n(t,o=!0){await t.addInteractor("particlesCollisions",async i=>{const{Collider:r}=await a(()=>import("./Collider-BgATma-4.js"),__vite__mapDeps([0,1,2,3]));return new r(i)},o)}export{n as loadParticlesCollisionsInteraction};
