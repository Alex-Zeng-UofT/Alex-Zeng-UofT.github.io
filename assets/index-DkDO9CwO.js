function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CL9xWJot.js","assets/index-jRawV3Z6.js","assets/index-CJ30xD0U.css","assets/index-CXdZFkaX.js","assets/index-CHik7aTI.js","assets/index-D3cLnFlH.js","assets/index-D20HPRal.js","assets/index-BqLW3Uad.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-jRawV3Z6.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-CL9xWJot.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-CXdZFkaX.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-CHik7aTI.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-D3cLnFlH.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-D20HPRal.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-BqLW3Uad.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
