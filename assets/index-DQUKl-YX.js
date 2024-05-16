function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-DeEt_YqL.js","assets/index-BwbLdScd.js","assets/index-BINi7toQ.css","assets/index-B7qwJ7Dj.js","assets/index-CmUE3__q.js","assets/index-TzzgPHvs.js","assets/index-DqM6x8WZ.js","assets/index-wPjBuu_r.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-BwbLdScd.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-DeEt_YqL.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-B7qwJ7Dj.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-CmUE3__q.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-TzzgPHvs.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-DqM6x8WZ.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-wPjBuu_r.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
