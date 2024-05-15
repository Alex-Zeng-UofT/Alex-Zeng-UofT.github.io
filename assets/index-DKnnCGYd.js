function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-De-gfpga.js","assets/index-BQGsk1NK.js","assets/index-CTREhXDy.css","assets/index-Bf2b_150.js","assets/index-BaEY6dm9.js","assets/index-BEbcsjEe.js","assets/index-B09UBVvW.js","assets/index-cE0eJu_J.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-BQGsk1NK.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-De-gfpga.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-Bf2b_150.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-BaEY6dm9.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BEbcsjEe.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-B09UBVvW.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-cE0eJu_J.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
