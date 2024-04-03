function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SizeUpdater-BOfthnxa.js","assets/index-DgzJoqq5.js","assets/index-CyW1Y3Q3.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-DgzJoqq5.js";async function o(t,a=!0){await t.addParticleUpdater("size",async()=>{const{SizeUpdater:e}=await r(()=>import("./SizeUpdater-BOfthnxa.js"),__vite__mapDeps([0,1,2]));return new e},a)}export{o as loadSizeUpdater};
