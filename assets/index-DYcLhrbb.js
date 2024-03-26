function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SizeUpdater-BSyW-cPp.js","assets/index-XxTkJquP.js","assets/index-BHuw2gbK.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-XxTkJquP.js";async function o(t,a=!0){await t.addParticleUpdater("size",async()=>{const{SizeUpdater:e}=await r(()=>import("./SizeUpdater-BSyW-cPp.js"),__vite__mapDeps([0,1,2]));return new e},a)}export{o as loadSizeUpdater};
