function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SizeUpdater-bfO6q8Qy.js","assets/index-Ck6guYk-.js","assets/index-C-B9UtFt.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-Ck6guYk-.js";async function o(t,a=!0){await t.addParticleUpdater("size",async()=>{const{SizeUpdater:e}=await r(()=>import("./SizeUpdater-bfO6q8Qy.js"),__vite__mapDeps([0,1,2]));return new e},a)}export{o as loadSizeUpdater};
