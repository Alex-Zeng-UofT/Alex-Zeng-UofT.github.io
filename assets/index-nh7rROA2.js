function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-SUsfqFdH.js","assets/index-2xYE1IkD.js","assets/index-IyFxZIeA.css","assets/index-XuBtLYMO.js","assets/index-MhS1CjQK.js","assets/index-YmN3FEMG.js","assets/index-DhKvEiZ_.js","assets/index-DnQkKZmy.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-2xYE1IkD.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-SUsfqFdH.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-XuBtLYMO.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-MhS1CjQK.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-YmN3FEMG.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-DhKvEiZ_.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DnQkKZmy.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
