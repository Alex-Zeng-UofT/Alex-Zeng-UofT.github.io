function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-B_tN5PqQ.js","assets/index-1De99QGE.js","assets/index-C1QYe0j-.css","assets/index-Bq9RfrE4.js","assets/index-C44Fl86C.js","assets/index-gxUNznfA.js","assets/index-CkVcgo1X.js","assets/index-8p95BX5a.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-1De99QGE.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-B_tN5PqQ.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-Bq9RfrE4.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-C44Fl86C.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-gxUNznfA.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CkVcgo1X.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-8p95BX5a.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
