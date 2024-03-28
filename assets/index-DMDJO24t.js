function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SizeUpdater-DrnTc-B3.js","assets/index-6UMhfSvO.js","assets/index-DzCBFKV5.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-6UMhfSvO.js";async function o(t,a=!0){await t.addParticleUpdater("size",async()=>{const{SizeUpdater:e}=await r(()=>import("./SizeUpdater-DrnTc-B3.js"),__vite__mapDeps([0,1,2]));return new e},a)}export{o as loadSizeUpdater};
