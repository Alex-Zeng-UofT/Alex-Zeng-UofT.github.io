function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Linker-bLWUl5XD.js","assets/Ranges-fOn6mOj7.js","assets/index-BlrhdDzz.js","assets/index-Cj7BLtnV.css","assets/index-BLCb-_1r.js","assets/OptionsColor-vNhRyg6S.js","assets/ParticlesInteractorBase-vfDeBun3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-BlrhdDzz.js";async function o(t,r=!0){await t.addInteractor("particlesLinks",async a=>{const{Linker:n}=await i(()=>import("./Linker-bLWUl5XD.js"),__vite__mapDeps([0,1,2,3,4,5,6]));return new n(a)},r)}export{o as loadLinksInteraction};
