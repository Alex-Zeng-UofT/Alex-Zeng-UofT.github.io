function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-vVckyoKe.js","assets/index-VS3nXEiB.js","assets/index-DF4efyE-.css","assets/index-i_TUmsxk.js","assets/index-B62e7JF8.js","assets/index-nZX0Eplw.js","assets/index-D5HOpt8l.js","assets/index-C74G5B_1.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-VS3nXEiB.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-vVckyoKe.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-i_TUmsxk.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-B62e7JF8.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-nZX0Eplw.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-D5HOpt8l.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-C74G5B_1.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
