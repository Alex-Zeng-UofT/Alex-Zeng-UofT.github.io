function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CwoAfBiN.js","assets/index-BlrhdDzz.js","assets/index-Cj7BLtnV.css","assets/index-Ums5iSjy.js","assets/index-CYp37w_L.js","assets/index-dKUj--lu.js","assets/index-2NSbYHD5.js","assets/index-7xEhFiMw.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-BlrhdDzz.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-CwoAfBiN.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-Ums5iSjy.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-CYp37w_L.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-dKUj--lu.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-2NSbYHD5.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-7xEhFiMw.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
