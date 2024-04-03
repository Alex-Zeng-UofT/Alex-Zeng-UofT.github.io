function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/OutOfCanvasUpdater-D-GCWPbr.js","assets/index-DIW2vxnt.js","assets/index-bZJ4Mhtb.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-DIW2vxnt.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async e=>{const{OutOfCanvasUpdater:r}=await o(()=>import("./OutOfCanvasUpdater-D-GCWPbr.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadOutModesUpdater};
