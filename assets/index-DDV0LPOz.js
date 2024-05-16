function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-Bs6rBxcv.js","assets/index-CJtBVQGp.js","assets/index-BINi7toQ.css","assets/index-CLf-PIWK.js","assets/index-B5yVCgrn.js","assets/index-BN9fBteK.js","assets/index-NOkqh1YY.js","assets/index-CCSZASFW.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CJtBVQGp.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-Bs6rBxcv.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-CLf-PIWK.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-B5yVCgrn.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BN9fBteK.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-NOkqh1YY.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-CCSZASFW.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
