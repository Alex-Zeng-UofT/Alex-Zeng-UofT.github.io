function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-ab01MAzn.js","assets/index-BHu33pQw.js","assets/index-DXFoFm9C.css","assets/index-CwLFbbVq.js","assets/index-CQmySo8_.js","assets/index-DBvO66wa.js","assets/index-D0gpNd2p.js","assets/index-D4OajtXV.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-BHu33pQw.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-ab01MAzn.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-CwLFbbVq.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-CQmySo8_.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-DBvO66wa.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-D0gpNd2p.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-D4OajtXV.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
