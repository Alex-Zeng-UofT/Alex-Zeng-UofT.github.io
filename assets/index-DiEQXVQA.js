function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RotateUpdater-CWLZIflj.js","assets/index-DIW2vxnt.js","assets/index-bZJ4Mhtb.css","assets/ValueWithRandom-Dy1-yRsg.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-DIW2vxnt.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater-CWLZIflj.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{i as loadRotateUpdater};
