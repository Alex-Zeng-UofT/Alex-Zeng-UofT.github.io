function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Linker-C60Vs5lf.js","assets/Ranges-Dnpy_tR-.js","assets/index-s3Tnz3cv.js","assets/index-CkfoOWYk.css","assets/index-BdPXDzgp.js","assets/OptionsColor-1JvXAtGI.js","assets/ParticlesInteractorBase-vfDeBun3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-s3Tnz3cv.js";async function o(t,r=!0){await t.addInteractor("particlesLinks",async a=>{const{Linker:n}=await i(()=>import("./Linker-C60Vs5lf.js"),__vite__mapDeps([0,1,2,3,4,5,6]));return new n(a)},r)}export{o as loadLinksInteraction};
