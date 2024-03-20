function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-DyCuOicE.js","assets/index-DoyWvnwe.js","assets/index-CdcA0VCb.css","assets/index-D4zl475e.js","assets/index-C_yy_k3d.js","assets/index-BzMHsoAK.js","assets/index-1E01cyNv.js","assets/index-Im-rtKM5.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DoyWvnwe.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-DyCuOicE.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-D4zl475e.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-C_yy_k3d.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BzMHsoAK.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-1E01cyNv.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-Im-rtKM5.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
