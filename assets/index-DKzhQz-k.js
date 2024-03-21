function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-BL8YShVX.js","assets/index-BAGo4rY6.js","assets/index-B_L-9jsh.css","assets/index-Bir_xy7M.js","assets/index-DHDoGhKH.js","assets/index-HuCdJCRm.js","assets/index-Dvd3GoAW.js","assets/index-WQyWAH2k.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-BAGo4rY6.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-BL8YShVX.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-Bir_xy7M.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-DHDoGhKH.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-HuCdJCRm.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-Dvd3GoAW.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-WQyWAH2k.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
