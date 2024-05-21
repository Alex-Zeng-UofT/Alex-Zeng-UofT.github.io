function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CU10HRhL.js","assets/index-D-LClPQh.js","assets/index-C1QYe0j-.css","assets/index-DDYNKFdR.js","assets/index-BXQLLOuG.js","assets/index-KTQP2zAv.js","assets/index-CB0QVnOO.js","assets/index-q_JQQ9yW.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-D-LClPQh.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-CU10HRhL.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DDYNKFdR.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-BXQLLOuG.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-KTQP2zAv.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CB0QVnOO.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-q_JQQ9yW.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
