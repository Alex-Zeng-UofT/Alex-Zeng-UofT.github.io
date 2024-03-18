function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CRhaFvJT.js","assets/index-Bna6mzLl.js","assets/index-BQZcQSBp.css","assets/index-Bs3Xv1fM.js","assets/index-BDUWZ3Np.js","assets/index-PTa6zc0X.js","assets/index-CJfUuHmp.js","assets/index-CKGlEA0X.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-Bna6mzLl.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-CRhaFvJT.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-Bs3Xv1fM.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-BDUWZ3Np.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-PTa6zc0X.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CJfUuHmp.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-CKGlEA0X.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
