function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-Cgz8VbxA.js","assets/index-Dg64NsQ_.js","assets/index-Cii1wOb7.css","assets/index-BGphv_bs.js","assets/index-LKEKJ5KN.js","assets/index-BcVI8C1u.js","assets/index-CgLpOTF2.js","assets/index-C-OUltGu.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-Dg64NsQ_.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-Cgz8VbxA.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-BGphv_bs.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-LKEKJ5KN.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BcVI8C1u.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CgLpOTF2.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-C-OUltGu.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
