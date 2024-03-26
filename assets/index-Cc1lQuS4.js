function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-DaT_hkkN.js","assets/index-BjFUeTzs.js","assets/index-DWI9udF-.css","assets/index-pu1LvRNi.js","assets/index-Cjvl44Ej.js","assets/index-BmO0wGJk.js","assets/index-BX5lNybH.js","assets/index-CugTZdvB.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-BjFUeTzs.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-DaT_hkkN.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-pu1LvRNi.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-Cjvl44Ej.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BmO0wGJk.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BX5lNybH.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-CugTZdvB.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
