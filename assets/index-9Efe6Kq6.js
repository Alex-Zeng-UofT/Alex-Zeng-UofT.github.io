function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CpsyNlcl.js","assets/index-CKuVoElR.js","assets/index-DS_731BA.css","assets/index-Dbz9aHZ9.js","assets/index-wPq_xScU.js","assets/index-f5iy2fPP.js","assets/index-BqSH_lg6.js","assets/index-BY_Vkkfn.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CKuVoElR.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-CpsyNlcl.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-Dbz9aHZ9.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-wPq_xScU.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-f5iy2fPP.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BqSH_lg6.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-BY_Vkkfn.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
