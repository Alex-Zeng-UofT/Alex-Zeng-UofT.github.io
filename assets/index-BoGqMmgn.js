function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-Dq_jwYh4.js","assets/index-DiHPzFe7.js","assets/index-C1QYe0j-.css","assets/index-1Y1opwlr.js","assets/index-ObgDezw9.js","assets/index-BWvPePon.js","assets/index-BFKNLT3V.js","assets/index-CVyyfnZc.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DiHPzFe7.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-Dq_jwYh4.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-1Y1opwlr.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-ObgDezw9.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BWvPePon.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BFKNLT3V.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-CVyyfnZc.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
