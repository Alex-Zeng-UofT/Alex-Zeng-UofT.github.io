function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-lJGGKH2Z.js","assets/index-DjLDiwRI.js","assets/index-CdcA0VCb.css","assets/index-BkYuEIht.js","assets/index-Co4VLGeE.js","assets/index-quiMc1H1.js","assets/index-8sm5G2S7.js","assets/index-CY322XdM.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DjLDiwRI.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-lJGGKH2Z.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-BkYuEIht.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-Co4VLGeE.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-quiMc1H1.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-8sm5G2S7.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-CY322XdM.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
