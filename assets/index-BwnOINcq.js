function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-DoaDo1HX.js","assets/index-rtuUwpI4.js","assets/index-Cii1wOb7.css","assets/index-DsYTtCVZ.js","assets/index-C0hkyMiQ.js","assets/index-DGR7spQ1.js","assets/index-BygPOmSA.js","assets/index-DVFD473a.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-rtuUwpI4.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-DoaDo1HX.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DsYTtCVZ.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-C0hkyMiQ.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-DGR7spQ1.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BygPOmSA.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DVFD473a.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
