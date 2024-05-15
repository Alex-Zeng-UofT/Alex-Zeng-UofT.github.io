function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-DJU_7pGr.js","assets/index-CJtmMckv.js","assets/index-CTREhXDy.css","assets/index-rrDLJz98.js","assets/index-DgyQ2KwM.js","assets/index-CBtFBnxA.js","assets/index-BgSXrZgV.js","assets/index-B3_spzBj.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CJtmMckv.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-DJU_7pGr.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-rrDLJz98.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-DgyQ2KwM.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CBtFBnxA.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BgSXrZgV.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-B3_spzBj.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
