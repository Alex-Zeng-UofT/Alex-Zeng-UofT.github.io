function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CelO49k5.js","assets/index-XxTkJquP.js","assets/index-BHuw2gbK.css","assets/index-D6HXFvDn.js","assets/index-B9GaOPeX.js","assets/index-Dqe6dggY.js","assets/index-Bwe2Jw9G.js","assets/index-DYcLhrbb.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-XxTkJquP.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-CelO49k5.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-D6HXFvDn.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-B9GaOPeX.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-Dqe6dggY.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-Bwe2Jw9G.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DYcLhrbb.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
