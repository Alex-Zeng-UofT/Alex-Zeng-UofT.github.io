function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SizeUpdater-K7srpT0K.js","assets/index-1De99QGE.js","assets/index-C1QYe0j-.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-1De99QGE.js";async function o(t,a=!0){await t.addParticleUpdater("size",async()=>{const{SizeUpdater:e}=await r(()=>import("./SizeUpdater-K7srpT0K.js"),__vite__mapDeps([0,1,2]));return new e},a)}export{o as loadSizeUpdater};
