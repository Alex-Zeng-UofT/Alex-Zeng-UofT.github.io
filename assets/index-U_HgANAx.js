function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-vRYlQ7y2.js","assets/index-BiWRZmT0.js","assets/index-gmUO0NGi.css","assets/index-D-klSL5k.js","assets/index-BxRbY6V0.js","assets/index-BWkt9Ms2.js","assets/index-DeHwRSWz.js","assets/index-LiDvwVSS.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-BiWRZmT0.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-vRYlQ7y2.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-D-klSL5k.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-BxRbY6V0.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BWkt9Ms2.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-DeHwRSWz.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-LiDvwVSS.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
