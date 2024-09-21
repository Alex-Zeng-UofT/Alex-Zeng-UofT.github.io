function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-B-q0QV3p.js","assets/index-D16bdUKI.js","assets/index-CkfoOWYk.css","assets/index-BVk5x-oe.js","assets/index-Db8IrQBl.js","assets/index-D2XBpRGQ.js","assets/index-BX8h_eCB.js","assets/index-DoHUsIWp.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-D16bdUKI.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-B-q0QV3p.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-BVk5x-oe.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-Db8IrQBl.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-D2XBpRGQ.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BX8h_eCB.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DoHUsIWp.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
