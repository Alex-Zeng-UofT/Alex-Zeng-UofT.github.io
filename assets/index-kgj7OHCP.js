function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-tRwAc2C8.js","assets/index-Cg3GTvL9.js","assets/index-C1QYe0j-.css","assets/index-Ck8nENO8.js","assets/index-BA607FSx.js","assets/index-BrxGQ_6X.js","assets/index-vLudqI5x.js","assets/index-D-VWz9Ec.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-Cg3GTvL9.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-tRwAc2C8.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-Ck8nENO8.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-BA607FSx.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BrxGQ_6X.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-vLudqI5x.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-D-VWz9Ec.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
