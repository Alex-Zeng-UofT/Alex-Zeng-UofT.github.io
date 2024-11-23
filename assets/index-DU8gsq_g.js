function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-BJC9ubOD.js","assets/index-CQnA94Op.js","assets/index-gmUO0NGi.css","assets/index-BYNshEzH.js","assets/index-CejiyQXX.js","assets/index-B5Oy7Doi.js","assets/index-CRIsPBNL.js","assets/index-BmpdBXmI.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CQnA94Op.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-BJC9ubOD.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-BYNshEzH.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-CejiyQXX.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-B5Oy7Doi.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CRIsPBNL.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-BmpdBXmI.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
