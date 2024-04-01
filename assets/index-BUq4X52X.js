function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CgGArLx8.js","assets/index-Bo2c8FCs.js","assets/index-Dq7do85a.css","assets/index-rPts4N1g.js","assets/index-gJVI0aQw.js","assets/index-BqKQ10dT.js","assets/index-BF1nJKhV.js","assets/index-C4YBmBJ0.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-Bo2c8FCs.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-CgGArLx8.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-rPts4N1g.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-gJVI0aQw.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BqKQ10dT.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BF1nJKhV.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-C4YBmBJ0.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
