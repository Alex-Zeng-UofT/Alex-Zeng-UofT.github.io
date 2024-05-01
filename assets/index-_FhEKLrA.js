function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SizeUpdater-B6HEf1jd.js","assets/index-B_WvZqww.js","assets/index-Cii1wOb7.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-B_WvZqww.js";async function o(t,a=!0){await t.addParticleUpdater("size",async()=>{const{SizeUpdater:e}=await r(()=>import("./SizeUpdater-B6HEf1jd.js"),__vite__mapDeps([0,1,2]));return new e},a)}export{o as loadSizeUpdater};
