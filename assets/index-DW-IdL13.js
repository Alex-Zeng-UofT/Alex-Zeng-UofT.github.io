function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-BamnXN0O.js","assets/index-BCzWxlvc.js","assets/index-q2YXsJLi.css","assets/index-CfZx16Yj.js","assets/index-babMQgZH.js","assets/index-DbKzPsHa.js","assets/index-BAuEMqSl.js","assets/index-8YBhBfVy.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-BCzWxlvc.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-BamnXN0O.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-CfZx16Yj.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-babMQgZH.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-DbKzPsHa.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BAuEMqSl.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-8YBhBfVy.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
