function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SizeUpdater-CU86bf2I.js","assets/index-CYFJOmnd.js","assets/index-DWSiF_fI.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-CYFJOmnd.js";async function o(t,a=!0){await t.addParticleUpdater("size",async()=>{const{SizeUpdater:e}=await r(()=>import("./SizeUpdater-CU86bf2I.js"),__vite__mapDeps([0,1,2]));return new e},a)}export{o as loadSizeUpdater};
