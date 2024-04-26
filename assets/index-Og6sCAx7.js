function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-Cfkl2Vqh.js","assets/index-Ctvvo-i9.js","assets/index-Cii1wOb7.css","assets/index-BLgCAfeQ.js","assets/index-Bf09nbe0.js","assets/index-S_S-fMH7.js","assets/index-CWSRuwJQ.js","assets/index-DTlNczj6.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-Ctvvo-i9.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-Cfkl2Vqh.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-BLgCAfeQ.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-Bf09nbe0.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-S_S-fMH7.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CWSRuwJQ.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DTlNczj6.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
