function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Linker-BSSMY4ZT.js","assets/Ranges-Bmvf0Vxt.js","assets/index-Dp9vaq2G.js","assets/index-DAmGPYGG.css","assets/index-CYMjOyX6.js","assets/OptionsColor-D7Y85eC3.js","assets/ParticlesInteractorBase-vfDeBun3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-Dp9vaq2G.js";async function o(t,r=!0){await t.addInteractor("particlesLinks",async a=>{const{Linker:n}=await i(()=>import("./Linker-BSSMY4ZT.js"),__vite__mapDeps([0,1,2,3,4,5,6]));return new n(a)},r)}export{o as loadLinksInteraction};
