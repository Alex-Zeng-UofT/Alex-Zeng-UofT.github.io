function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Linker-Cn6rHvQ_.js","assets/Ranges-DuTBWiHt.js","assets/index-PBVBIE-g.js","assets/index-C1QYe0j-.css","assets/index-ccGmC2tk.js","assets/OptionsColor-BI9qvg7X.js","assets/ParticlesInteractorBase-vfDeBun3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-PBVBIE-g.js";async function o(t,r=!0){await t.addInteractor("particlesLinks",async a=>{const{Linker:n}=await i(()=>import("./Linker-Cn6rHvQ_.js"),__vite__mapDeps([0,1,2,3,4,5,6]));return new n(a)},r)}export{o as loadLinksInteraction};
