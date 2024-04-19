function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-BjrqM-FV.js","assets/index-D7ID1jhZ.js","assets/index-v8eNchJi.css","assets/index-CyMB_OjS.js","assets/index-BSTQy1Ru.js","assets/index-BVnQhvPq.js","assets/index-rsFPeedp.js","assets/index-DVP4oyDw.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-D7ID1jhZ.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-BjrqM-FV.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-CyMB_OjS.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-BSTQy1Ru.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BVnQhvPq.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-rsFPeedp.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DVP4oyDw.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
