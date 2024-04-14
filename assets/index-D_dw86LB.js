function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-BMXbJbdh.js","assets/index-DBVudp8O.js","assets/index-qqsKf9wA.css","assets/index-G0_R3Spb.js","assets/index-CMfqDC5d.js","assets/index-CeXnMHk_.js","assets/index-ByBWuiBN.js","assets/index-Fe4WgLED.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DBVudp8O.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-BMXbJbdh.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-G0_R3Spb.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-CMfqDC5d.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CeXnMHk_.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-ByBWuiBN.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-Fe4WgLED.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
