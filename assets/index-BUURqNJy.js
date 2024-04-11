function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-NwgyP-H4.js","assets/index-DsDe4_4Y.js","assets/index-DXFoFm9C.css","assets/index-DJ-W7Ox3.js","assets/index-DES51ddC.js","assets/index-BSjn7TWU.js","assets/index-BFsd98b2.js","assets/index-B_CBCbxj.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DsDe4_4Y.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-NwgyP-H4.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DJ-W7Ox3.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-DES51ddC.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BSjn7TWU.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BFsd98b2.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-B_CBCbxj.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
