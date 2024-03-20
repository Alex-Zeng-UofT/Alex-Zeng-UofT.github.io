function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SizeUpdater-Ckmzo3f1.js","assets/index-VS3nXEiB.js","assets/index-DF4efyE-.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-VS3nXEiB.js";async function o(t,a=!0){await t.addParticleUpdater("size",async()=>{const{SizeUpdater:e}=await r(()=>import("./SizeUpdater-Ckmzo3f1.js"),__vite__mapDeps([0,1,2]));return new e},a)}export{o as loadSizeUpdater};
