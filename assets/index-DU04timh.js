function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-D4lJJncT.js","assets/index-B-uR5-xc.js","assets/index-gmUO0NGi.css","assets/index-Bi_-mIua.js","assets/index-r5A9alrA.js","assets/index-DHVdNOG-.js","assets/index-wgriV-CO.js","assets/index-Ci6zEXT8.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-B-uR5-xc.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-D4lJJncT.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-Bi_-mIua.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-r5A9alrA.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-DHVdNOG-.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-wgriV-CO.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-Ci6zEXT8.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
