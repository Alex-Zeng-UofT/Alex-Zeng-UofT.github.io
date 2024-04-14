function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-Bjg9-TE3.js","assets/index-q6A_B75j.js","assets/index-AKXYA6Ub.css","assets/index-BJR1TwDF.js","assets/index-Da7BT6c9.js","assets/index-iuoBlRWS.js","assets/index-BSVa4dxM.js","assets/index-DeDbOdjd.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-q6A_B75j.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-Bjg9-TE3.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-BJR1TwDF.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-Da7BT6c9.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-iuoBlRWS.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BSVa4dxM.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DeDbOdjd.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
