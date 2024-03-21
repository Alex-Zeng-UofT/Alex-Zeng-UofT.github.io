function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-DHY-6h8d.js","assets/index-Ck6guYk-.js","assets/index-C-B9UtFt.css","assets/index-DXkQl_YB.js","assets/index-rcuFmpPr.js","assets/index-CWuQvwOp.js","assets/index-CLksmeyS.js","assets/index-CLU7Lgtc.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-Ck6guYk-.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-DHY-6h8d.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DXkQl_YB.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-rcuFmpPr.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CWuQvwOp.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CLksmeyS.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-CLU7Lgtc.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
