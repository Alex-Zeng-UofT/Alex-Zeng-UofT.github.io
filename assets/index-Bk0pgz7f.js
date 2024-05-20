function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CF3gw5xs.js","assets/index-CfyCieNz.js","assets/index-BINi7toQ.css","assets/index-EYFcS9pQ.js","assets/index-zLHB531P.js","assets/index-ClmG3iF8.js","assets/index-Cu0_K-_Z.js","assets/index-DSYl5a1I.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CfyCieNz.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-CF3gw5xs.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-EYFcS9pQ.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-zLHB531P.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-ClmG3iF8.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-Cu0_K-_Z.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DSYl5a1I.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
