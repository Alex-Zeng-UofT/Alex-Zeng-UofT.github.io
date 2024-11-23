function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CMA-MqCC.js","assets/index-Bqhazx45.js","assets/index-gmUO0NGi.css","assets/index-DSN9D0Gv.js","assets/index-aXlrYK_r.js","assets/index-DirgOxbs.js","assets/index-CZXIUi_i.js","assets/index-C3mMF-J9.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-Bqhazx45.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-CMA-MqCC.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DSN9D0Gv.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-aXlrYK_r.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-DirgOxbs.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CZXIUi_i.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-C3mMF-J9.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
