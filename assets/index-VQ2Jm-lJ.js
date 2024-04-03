function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-BMvtf9NB.js","assets/index-DgzJoqq5.js","assets/index-CyW1Y3Q3.css","assets/index-DmD_4rrh.js","assets/index-BjVrxFyI.js","assets/index-D-Iks8Hr.js","assets/index-DffFADYY.js","assets/index-5TdxUyvr.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DgzJoqq5.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-BMvtf9NB.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DmD_4rrh.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-BjVrxFyI.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-D-Iks8Hr.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-DffFADYY.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-5TdxUyvr.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
