function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SizeUpdater-0g8fqMbm.js","assets/index-BAGo4rY6.js","assets/index-B_L-9jsh.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-BAGo4rY6.js";async function o(t,a=!0){await t.addParticleUpdater("size",async()=>{const{SizeUpdater:e}=await r(()=>import("./SizeUpdater-0g8fqMbm.js"),__vite__mapDeps([0,1,2]));return new e},a)}export{o as loadSizeUpdater};
