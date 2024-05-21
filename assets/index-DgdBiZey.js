function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CrVAzUT0.js","assets/index-CYFJOmnd.js","assets/index-DWSiF_fI.css","assets/index-DEsnk0Na.js","assets/index-DVLTA0LO.js","assets/index-DNiCQu52.js","assets/index-395zMti2.js","assets/index-CwI5Qwcs.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CYFJOmnd.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-CrVAzUT0.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DEsnk0Na.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-DVLTA0LO.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-DNiCQu52.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-395zMti2.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-CwI5Qwcs.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
