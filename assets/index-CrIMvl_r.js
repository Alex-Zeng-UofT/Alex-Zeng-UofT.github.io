function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-BDumWNgB.js","assets/index-B_E9vqY_.js","assets/index-Cii1wOb7.css","assets/index-eSb4aMBS.js","assets/index-DMz6Y1Tw.js","assets/index-CGPQOWQA.js","assets/index-DK8KrRcz.js","assets/index-vI0DODbw.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-B_E9vqY_.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-BDumWNgB.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-eSb4aMBS.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-DMz6Y1Tw.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CGPQOWQA.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-DK8KrRcz.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-vI0DODbw.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
