function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-BrXKyLRK.js","assets/index-B_WvZqww.js","assets/index-Cii1wOb7.css","assets/index-Bx0mfZxj.js","assets/index-B_8NVi8o.js","assets/index-C_cAGUJz.js","assets/index-Qp3ZbYar.js","assets/index-_FhEKLrA.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-B_WvZqww.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-BrXKyLRK.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-Bx0mfZxj.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-B_8NVi8o.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-C_cAGUJz.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-Qp3ZbYar.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-_FhEKLrA.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
