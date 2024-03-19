function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-IkFopZFD.js","assets/index-WVeXVgAS.js","assets/index-BRwhfqVE.css","assets/index-CwHm4UdP.js","assets/index-CYBcg768.js","assets/index-MR3faVDZ.js","assets/index-BQPsQDda.js","assets/index-rEF9On-w.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-WVeXVgAS.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-IkFopZFD.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-CwHm4UdP.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-CYBcg768.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-MR3faVDZ.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BQPsQDda.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-rEF9On-w.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
