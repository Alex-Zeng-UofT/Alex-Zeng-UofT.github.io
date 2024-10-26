function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-DTkFyxof.js","assets/index-s3Tnz3cv.js","assets/index-CkfoOWYk.css","assets/index-DCeeofb5.js","assets/index-DkZimO2H.js","assets/index-uP_sWyt0.js","assets/index-CPcdwpVM.js","assets/index-5yI69YFH.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-s3Tnz3cv.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-DTkFyxof.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DCeeofb5.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-DkZimO2H.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-uP_sWyt0.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CPcdwpVM.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-5yI69YFH.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
