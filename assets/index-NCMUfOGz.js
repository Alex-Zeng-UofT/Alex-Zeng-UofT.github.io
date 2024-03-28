function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-C-qHNzeA.js","assets/index-COYy7mx-.js","assets/index-DWI9udF-.css","assets/index-Iy4kFPNt.js","assets/index-JLiiBa1U.js","assets/index-CZgIIeTi.js","assets/index-DUej4hRN.js","assets/index-jpZDAOLC.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-COYy7mx-.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-C-qHNzeA.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-Iy4kFPNt.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-JLiiBa1U.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CZgIIeTi.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-DUej4hRN.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-jpZDAOLC.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
