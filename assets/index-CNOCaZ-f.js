function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-D7v8VmEr.js","assets/index-C0EXnvsM.js","assets/index-gmUO0NGi.css","assets/index-hvzUO_7G.js","assets/index-BVnsGrmV.js","assets/index-DKqBWZEC.js","assets/index-DHN__vcP.js","assets/index-Cx2F0eGF.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-C0EXnvsM.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-D7v8VmEr.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-hvzUO_7G.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-BVnsGrmV.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-DKqBWZEC.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-DHN__vcP.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-Cx2F0eGF.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
