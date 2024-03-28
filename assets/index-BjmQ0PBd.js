function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-BlBOCcks.js","assets/index-pKDgK2bO.js","assets/index-DWI9udF-.css","assets/index-Dyxh3FGk.js","assets/index-Dq4u8Ans.js","assets/index-CEiGJv4z.js","assets/index-BoAhUS-l.js","assets/index-Cz5YpYQX.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-pKDgK2bO.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-BlBOCcks.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-Dyxh3FGk.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-Dq4u8Ans.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CEiGJv4z.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BoAhUS-l.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-Cz5YpYQX.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
