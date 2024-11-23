function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-DgTOr1e7.js","assets/index-sJPSBnuW.js","assets/index-gmUO0NGi.css","assets/index-CvJcimQ7.js","assets/index-Df6gpVo7.js","assets/index-BoFfVbFP.js","assets/index-hpAkulfl.js","assets/index-C2nze6Ab.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-sJPSBnuW.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-DgTOr1e7.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-CvJcimQ7.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-Df6gpVo7.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BoFfVbFP.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-hpAkulfl.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-C2nze6Ab.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
