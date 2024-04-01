function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-DG4Y4a4h.js","assets/index-Dp9vaq2G.js","assets/index-DAmGPYGG.css","assets/index-DmyEqBBg.js","assets/index-COEBl2-8.js","assets/index-CYACdpuP.js","assets/index-n4F0jVxf.js","assets/index-DCx4caWh.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-Dp9vaq2G.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-DG4Y4a4h.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DmyEqBBg.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-COEBl2-8.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CYACdpuP.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-n4F0jVxf.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DCx4caWh.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
