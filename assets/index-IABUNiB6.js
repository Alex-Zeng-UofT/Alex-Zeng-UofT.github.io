function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-lopR6Aqz.js","assets/index-DqP2y_1J.js","assets/index-CkfoOWYk.css","assets/index-HtjA0_At.js","assets/index-BIGCmZcg.js","assets/index-D380Lwff.js","assets/index-D-1KQ949.js","assets/index-C31f2FsT.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DqP2y_1J.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-lopR6Aqz.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-HtjA0_At.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-BIGCmZcg.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-D380Lwff.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-D-1KQ949.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-C31f2FsT.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
