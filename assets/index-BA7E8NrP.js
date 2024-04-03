function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Attractor-XuQKSW-Z.js","assets/ParticlesInteractorBase-vfDeBun3.js","assets/index-DIW2vxnt.js","assets/index-bZJ4Mhtb.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as c}from"./index-DIW2vxnt.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await c(()=>import("./Attractor-XuQKSW-Z.js"),__vite__mapDeps([0,1,2,3]));return new o(a)},r)}export{i as loadParticlesAttractInteraction};
