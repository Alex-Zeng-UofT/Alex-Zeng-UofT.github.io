function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CNEY3cNN.js","assets/index-BLjsb39q.js","assets/index-BI65mqPB.css","assets/index-CEFMogFP.js","assets/index-D9EFflEq.js","assets/index-CEbHeMbg.js","assets/index-AueaFgnT.js","assets/index-Cw6tEBHf.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-BLjsb39q.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-CNEY3cNN.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-CEFMogFP.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-D9EFflEq.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CEbHeMbg.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-AueaFgnT.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-Cw6tEBHf.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
