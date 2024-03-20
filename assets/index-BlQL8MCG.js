function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-DvkFZ8a9.js","assets/index-BTZSDph9.js","assets/index-CdcA0VCb.css","assets/index-DU785sCN.js","assets/index-Bp3ZCY9V.js","assets/index-C_kbxksw.js","assets/index-B5a0Fg1Z.js","assets/index-CX2b58IV.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-BTZSDph9.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-DvkFZ8a9.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DU785sCN.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-Bp3ZCY9V.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-C_kbxksw.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-B5a0Fg1Z.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-CX2b58IV.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
