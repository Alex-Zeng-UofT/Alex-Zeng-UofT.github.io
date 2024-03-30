function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-BxHvKQOi.js","assets/index-Dus5H_0b.js","assets/index-Dcy-N29S.css","assets/index-BZ4V-up-.js","assets/index-DcZ8L6pI.js","assets/index-DwspxAmu.js","assets/index-F4Bk4J1_.js","assets/index-B3QSdL8r.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-Dus5H_0b.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-BxHvKQOi.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-BZ4V-up-.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-DcZ8L6pI.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-DwspxAmu.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-F4Bk4J1_.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-B3QSdL8r.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
