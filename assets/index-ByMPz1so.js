function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-OI0F1tCV.js","assets/index-8JTeZFAI.js","assets/index-Cii1wOb7.css","assets/index-KH_v-jkQ.js","assets/index-DQBGcMnK.js","assets/index-YlQ5VNMd.js","assets/index-BI_gSW3Q.js","assets/index-iftOlCmw.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-8JTeZFAI.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-OI0F1tCV.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-KH_v-jkQ.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-DQBGcMnK.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-YlQ5VNMd.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BI_gSW3Q.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-iftOlCmw.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
