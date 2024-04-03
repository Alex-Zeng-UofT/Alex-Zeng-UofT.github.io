function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-B5UlkvXY.js","assets/index-DIW2vxnt.js","assets/index-bZJ4Mhtb.css","assets/index-DGqpN8aX.js","assets/index-Ff2FO0ij.js","assets/index-CQsfvO6C.js","assets/index-lgik47hB.js","assets/index-0W0ceyY9.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DIW2vxnt.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-B5UlkvXY.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DGqpN8aX.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-Ff2FO0ij.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CQsfvO6C.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-lgik47hB.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-0W0ceyY9.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
