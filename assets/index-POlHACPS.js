function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-41Pbp2SG.js","assets/index-DStHyoKn.js","assets/index-BINi7toQ.css","assets/index-Ce3QqLg1.js","assets/index-D7XFX3bA.js","assets/index-CzV8GE9U.js","assets/index-BYLF2949.js","assets/index-V2Ha1eRJ.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DStHyoKn.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-41Pbp2SG.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-Ce3QqLg1.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-D7XFX3bA.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CzV8GE9U.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BYLF2949.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-V2Ha1eRJ.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
