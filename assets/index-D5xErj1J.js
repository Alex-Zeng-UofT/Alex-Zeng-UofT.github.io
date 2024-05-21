function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-BwXQozYR.js","assets/index-PBVBIE-g.js","assets/index-C1QYe0j-.css","assets/index-Dy3zOoOl.js","assets/index-CjFLZaol.js","assets/index-DwuPRw6b.js","assets/index-BjCGNCNe.js","assets/index-BCrPhZvJ.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-PBVBIE-g.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-BwXQozYR.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-Dy3zOoOl.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-CjFLZaol.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-DwuPRw6b.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BjCGNCNe.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-BCrPhZvJ.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
