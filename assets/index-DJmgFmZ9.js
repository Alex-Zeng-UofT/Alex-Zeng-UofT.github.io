function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-BDc1U6ds.js","assets/ValueWithRandom-Dy1-yRsg.js","assets/index-DIW2vxnt.js","assets/index-bZJ4Mhtb.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-DIW2vxnt.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-BDc1U6ds.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
