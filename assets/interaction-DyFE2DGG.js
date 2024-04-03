function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Linker-BuGo8JBY.js","assets/Ranges-cngjWnYX.js","assets/index-DIW2vxnt.js","assets/index-bZJ4Mhtb.css","assets/index-HN0IhrIq.js","assets/OptionsColor-D-FF23f_.js","assets/ParticlesInteractorBase-vfDeBun3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-DIW2vxnt.js";async function o(t,r=!0){await t.addInteractor("particlesLinks",async a=>{const{Linker:n}=await i(()=>import("./Linker-BuGo8JBY.js"),__vite__mapDeps([0,1,2,3,4,5,6]));return new n(a)},r)}export{o as loadLinksInteraction};
