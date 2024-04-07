function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-Blw2nDug.js","assets/index-fqPVLL3I.js","assets/index-BcUajMD1.css","assets/index-DdT6L44R.js","assets/index-BtldXAKZ.js","assets/index-CyIR2b3S.js","assets/index-DElvULFK.js","assets/index-B8_STUmI.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-fqPVLL3I.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-Blw2nDug.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DdT6L44R.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-BtldXAKZ.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CyIR2b3S.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-DElvULFK.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-B8_STUmI.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
