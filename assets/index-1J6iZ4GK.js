function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-D2e1eC6B.js","assets/index-6UMhfSvO.js","assets/index-DzCBFKV5.css","assets/index-CmB8IywQ.js","assets/index-DX6HUoNX.js","assets/index-MOkreiLp.js","assets/index-O14bQ9ib.js","assets/index-DMDJO24t.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-6UMhfSvO.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-D2e1eC6B.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-CmB8IywQ.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-DX6HUoNX.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-MOkreiLp.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-O14bQ9ib.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DMDJO24t.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
